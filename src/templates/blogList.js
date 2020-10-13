import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Pagination from "../components/pagination"
import BlogListRender from "../components/blogListRender"
import AllSearch from "../components/allSearch"

const blogStyle = {
  display: `grid`,
  gridTemplateColumns: `auto auto`,
  gridGap: `50px`
}

const BlogPostList = ({ data, pageContext }) => {
  const { allMdx } = data
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
        <div style={blogStyle}>
        {allMdx.edges.map(BlogListRender)}
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
        <AllSearch />
    </Layout>
  )
}

export default BlogPostList

export const query = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { status: { ne: "draft" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
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
