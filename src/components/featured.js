import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DisplayTitle from "./displayTitle"
import BlogPostRender from "../components/blogPostRender"

const BlogFeatured = () => {
  const { mdx } = useStaticQuery(query)

  return (

    <div>
      <DisplayTitle title="Featured Writing" />
      <BlogPostRender node={mdx} />
    </div>

  )
}

export default BlogFeatured

const query = graphql`
  query blogFeaturedList {
    mdx(
      frontmatter: {  status: { eq: "featured" }  }
    ) {
     
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
            category
            tags
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
