/* Last modified Sep 5, 2020 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const {  createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  //console.log(JSON.stringify(node,undefined,4))
  if (node.internal.type === `Mdx`) {

    const value = createFilePath({ node, getNode })
    const [month, day, year] = new Date(node.frontmatter.date)
      .toLocaleDateString("en-EN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
    //const slug = path.basename(node.fileAbsolutePath, '.md')
    const slug = value.replace("/blog/", "").replace(/\/$/, "")
    const url = `/blog/${year}/${month}/${day}${slug}`

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogLayout = path.resolve(`./src/templates/blogPost.js`)
  const blogListLayout = path.resolve(`./src/templates/blogList.js`)
  const categoryTemplate = path.resolve(`./src/templates/blogCategory.js`)
  const tagTemplate = path.resolve("./src/templates/blogTags.js")


  const res = await graphql(`
  query  {
    allMdx (
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ){
      edges {
        node {
          fields {
            slug
          }
         frontmatter {
            title
            date
            category
            tags
          }
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    categoriesGroup: allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
  `)
  // Create blog posts pages.
  const posts = res.data.allMdx.edges

  const postsPerPage = 12
  const numPages = Math.ceil(posts.length / postsPerPage)
  const categories = []
  const tags = []
  
  
  //Code for pagination 
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      //path: i === 0 ? `/blog/${post.node.fields.slug}` : `/blog/${i + 1}/${post.node.fields.slug}`,
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  
  // Creating blog posts
  posts.forEach((post, index, arr) => {
    post.node.frontmatter.tags.forEach(tag => tags.push(tag))
    post.node.frontmatter.category.forEach(category => categories.push(category))
   
    const prev = arr[index - 1]
    const next = arr[index + 1]

    createPage({
      path: post.node.fields.slug,
      component: blogLayout,
      context: {
        slug: post.node.fields.slug,
        prev: prev,
        next: next,
      },
    })
  })

  /* creating tags page */
  // Extract tag data from query
  const tagGroup = res.data.tagsGroup.group
  // Make tag pages
  tagGroup.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  /* creating categories page */
  // Extract category data from query
  const categoryGroup = res.data.categoriesGroup.group
  // Make category pages
  categoryGroup.forEach(category => {
    createPage({
      path: `/blog/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })


}