import React from "react"
import kebabCase from "lodash.kebabcase"
import ConcatWords from "../utils/concatWords"
import FormatDate from "../utils/formatDate"
import DisplayLink from "./displayLink"
import { Link } from "gatsby"



const BlogListRender = ({ node }) => {

  // make sure the image is set in MD otherwise this will error
  const imageSource = node.frontmatter.image.childImageSharp.fluid.src

  return (

    <div style={{ display: 'flex', justifyContent: "space-around" }}>
      <Link to={node.fields.slug}>
      <img src={imageSource} style={{ width: '100px', height: '120px', margin: '0', flex: '0 0 120px' }} alt="" />
      </Link>
      <div style={{ flex: '1', marginLeft: '18px', padding: '12px' }}>
        <h2 style={{ padding: '0', margin: '0 0 12px 0' }}>
          <DisplayLink style={{ marginRight: `1.3rem`, textDecoration: `none` }} to={node.fields.slug}
            desc={node.frontmatter.title} />
        </h2>
        <p style={{ margin: '0', fontSize: "smaller" }}>published {" "}{FormatDate(node.frontmatter.date)}
          <br />Tags : {" "}
          {node.frontmatter.tags.map((tag, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={tag}>
              <DisplayLink style={{ textDecoration: `none` }} to={`/blog/tags/${kebabCase(tag)}`} desc={tag} />
            </ConcatWords>
          ))}
          <br />Category : {" "}
          {node.frontmatter.category.map((tag, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={tag}>
              <DisplayLink style={{ textDecoration: `none` }} to={`/blog/category/${kebabCase(tag)}`} desc={tag} />
            </ConcatWords>
          ))}
        </p>
      </div>
    </div>


  )
}

export default BlogListRender
