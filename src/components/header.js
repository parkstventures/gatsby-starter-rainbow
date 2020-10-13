import PropTypes from "prop-types"
import React from "react"

import DisplayLink from "./displayLink"


const titleStyle = {
  color: "black",
  textDecoration: "none"
}

const Header = ({ siteTitle, siteDescription }) => (
  <header>

    <h1 style={{ margin: 0 }}>
    <DisplayLink to="/" desc={siteTitle} style={titleStyle} />
     
    </h1>
    <h4 style={titleStyle}>{siteDescription}</h4>

    <ul style={{ display: `flex`, listStyleType: `none`, margin: `0` }} >
      <li >
        <DisplayLink to="/" desc={"home"} />

      </li>
      <li >
        <DisplayLink to="/blog" desc={"writings"} />

      </li>
      <li >
        <DisplayLink to="/search" desc={"search"} />

      </li>
      <li >
        <DisplayLink to="/about" desc={"about"} />

      </li>

    </ul>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
