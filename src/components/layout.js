import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "./useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import ColoredLine from "./drawLine"

const Layout = ({ children }) => {

  const { title, description, version, author, social } = useSiteMetadata();


  return (
    <>
      <div style={{
        display: `flex`,
        justifyContent: `center`,
      }} >

        <div style={{
          display: `grid`,
          maxWidth: `800px`,
        }} >

          <Header siteTitle={title} siteDescription={description} />
          <ColoredLine color="red" />
          <main>{children}</main>
          <ColoredLine color="red" />
          <Footer author={author} instagram={social.instagram} version={version} />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
