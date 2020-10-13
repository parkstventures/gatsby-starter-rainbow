import React from "react"
import kebabCase from "lodash.kebabcase"
import ConcatWords from "../utils/concatWords"
import FormatDate from "../utils/formatDate"
import DisplayLink from "./displayLink"
import { MDXRenderer } from "gatsby-plugin-mdx"


const BlogPostRender = ({ node }) => {

    // make sure the image is set in MD otherwise this will error
    const imageSource = node.frontmatter.image.childImageSharp.fluid.src
    var randomBoolean = Math.random() < 0.5
    return (

        <div >

            <h2 >{node.frontmatter.title}</h2>

            {randomBoolean === false && <span><img src={imageSource}  alt={node.frontmatter.title} /></span>}

            <p style={{ margin: '0', fontSize: "smaller" }} >
                published {" "}
                {FormatDate(node.frontmatter.date)} {" "}
        | {" "} {node.wordCount.words} words

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


            <p ><br /><MDXRenderer>{node.body}</MDXRenderer></p>


        </div>


    )
}

export default BlogPostRender