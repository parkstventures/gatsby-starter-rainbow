import React from "react"
import PropTypes from "prop-types"
// Components
import {  graphql } from "gatsby"
import DisplayLink from "../components/displayLink"
import Layout from "../components/layout"
import BlogListRender from "../components/blogListRender"
import Seo from "../components/seo"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`
  return (
    <Layout>
      <Seo title={categoryHeader} />
      <h3>{categoryHeader}</h3>
      <DisplayLink to="/search" desc="View All" />
      {edges.map(BlogListRender)}
      <DisplayLink to="/search" desc="View All" />
      </Layout>
  )
}
Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 20)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`