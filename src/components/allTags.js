import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import DisplayLink from "./displayLink"
import { graphql,  useStaticQuery } from "gatsby"
import DisplayTitle from "./displayTitle"

const AllTags = () => {
    const { allMdx } = useStaticQuery(pageQuery)
    return (
      
        <div>
            
            <DisplayTitle title = "All Tags" />
            <h3>{allMdx.group.map((tag) => (
                <DisplayLink to={`/blog/tags/${kebabCase(tag.fieldValue)}/`} desc={tag.fieldValue + " (" + tag.totalCount + ") "} />
            ))}
            </h3>
        </div>
     
    )
  }
  
export default AllTags




const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`