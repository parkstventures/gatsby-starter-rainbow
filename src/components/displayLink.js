import React from "react"
import { Link } from "gatsby"

const linkStyle = {
    marginRight: '1.3rem',
    textDecoration: "none"
  }

const DisplayLink = ({ to, desc, style }) => {

    return (
      <>
       <Link style={style || linkStyle} to={to}>{desc}</Link>
      </>
    )
  }
  
  export default DisplayLink