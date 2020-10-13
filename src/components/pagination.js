import React from "react"

import DisplayLink from "./displayLink"


const paginationStyle = {
  fontWeight: "bold",
  color: "red",
  marginRight: '1.3rem',
  textDecoration: "none"
}

const Pagination = ({ numPages, currentPage, contextPage }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <div >
      {Array.from({ length: numPages }).map((item, i) => {
        const index = i + 1
        const baseLink = `/blog/${contextPage ? `${contextPage}/` : ""}`
        const link = index === 1 ? baseLink : `${baseLink}page/${index}`
        return (
          <div style={{  display: `inline-block` }} current={currentPage === index} key={link}>
            {currentPage === index ? (
              <span style={{ marginRight: `1.3rem`, textDecoration: `none` }}>{index}</span>
            ) : (
                <DisplayLink to={link} desc={index}  style = {paginationStyle} />

              )}
          </div>
        )
      })}
     
    </div>
  )
}

export default Pagination
