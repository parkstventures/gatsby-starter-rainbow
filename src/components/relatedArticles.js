// SimilarArticles.js
//Ref: https://khalilstemmler.com/articles/gatsby-related-posts-component/
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { RelatedArticlesFactory } from './relatedArticlesFactory'
import DisplayLink from "./displayLink"
import ColoredLine from "./drawLine"
import DisplayTitle from "./displayTitle"


export function getPostsFromQuery(posts) {
  if (posts) {
    return posts.edges
      .map(edge => edge.node)
      .map(node => Object.assign({}, node.frontmatter, node.fields, { excerpt: node.excerpt }))
  }
  return []
}

const RelatedArticlesComponent = ({ articles }) => (
  <section>
    <ul>
    {articles.map((node, i) => (
      <li><h3>
      <DisplayLink to={node.article.slug} desc={node.article.title} /></h3>
      </li>
    ))}
     </ul>
  </section>
 
)

// (1.) Query for articles
const RelatedArticles = (props) => {

  const { posts } = useStaticQuery(query)
  const { tags, category, currentArticleSlug } = props

  // (2.) Marshall the response into articles
  const articles = getPostsFromQuery(posts);
  //console.log(articles)

  // (3.) Use a SimilarArticlesFactory to get my similar articles
  const similarArticles = new RelatedArticlesFactory(
    articles, currentArticleSlug
  )
    .setMaxArticles(4)
    .setTags(tags)
    .setCategory(category)
    .getArticles()

  // (4.) Render it
  return (
    <div>

      <ColoredLine color="red" />
      <DisplayTitle title="Related Articles" />
      <RelatedArticlesComponent articles={similarArticles} />

    </div>
  )


}

export default RelatedArticles

const query = graphql`
query SimilarArticles {    
  posts: allMdx(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: {
      frontmatter: {
        status: { ne: "draft" }
      }
    }
    limit: 1000
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