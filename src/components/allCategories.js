import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components

import DisplayLink from "./displayLink"
import { graphql, useStaticQuery } from "gatsby"
import DisplayTitle from "./displayTitle"

const AllCategories = () => {
  const { allMdx } = useStaticQuery(pageQuery)
  return (

    <div>

      <DisplayTitle title="All Categories" />

      <h3>{allMdx.group.map((category) => (

        <DisplayLink to={`/blog/category/${kebabCase(category.fieldValue)}/`} desc={category.fieldValue + " (" + category.totalCount + ") "} />

      ))}
      </h3>


    </div>

  )
}

export default AllCategories




const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`