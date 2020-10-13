import React from "react"
import { graphql } from "gatsby"
import DisplayLink from "../components/displayLink"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RelatedArticles from "../components/relatedArticles"
import BlogPostRender from "../components/blogPostRender"

const ShowPrevNext = ({ prev, next }) => {

  return (

    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>{prev && (
        <h3>
          <DisplayLink style={{ position: "relative", float: "left", textDecoration: `none` }} to={prev.node.fields.slug}
            desc={" <<" + prev.node.frontmatter.title} />
        </h3>

      )}</div>
      <div>{next && (
        <h3>
          <DisplayLink style={{ position: "relative", float: "right", textDecoration: `none` }} to={next.node.fields.slug}
            desc={" " + next.node.frontmatter.title + ">>"} />
        </h3>
      )}</div>
    </div>


  )
}

const BlogPost = ({ data, pageContext }) => {
  const { mdx } = data
  const { prev, next } = pageContext
  const slugUrl = mdx.fields.slug

  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />
      <BlogPostRender node={mdx} />
      <br />
      <ShowPrevNext prev={prev} next={next} />
      <RelatedArticles currentArticleSlug={slugUrl} category={mdx.frontmatter.category} tags={mdx.frontmatter.tags} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
      wordCount {
        words
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
