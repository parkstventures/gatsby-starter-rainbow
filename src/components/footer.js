import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import DisplayLink from "./displayLink"

const Footer = ({ author, version, instagram }) => {

  const data = useStaticQuery(graphql`
  
    query Images {
          profileImg: file(relativePath: { eq: "profile-pic.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 75, height: 75, duotone: {highlight: "#ffffff", shadow: "#222222"}) {
                    ...GatsbyImageSharpFixed
                }
              }
          }
      }
  `)

  return (

    <div style={{ display: `flex` , marginBottom: `1.45rem`}}>

      <div style={{ maxWidth: `75px`, padding: '12px', verticalAlign:`bottom` }}>
        <Img fixed={data.profileImg.childImageSharp.fixed} alt={author} />
      </div>

      <div style={{ flex: '1', marginLeft: '18px', padding: '12px', verticalAlign:`bottom` }}>

        <p style={{ margin: '0', fontSize: "smaller" }}> © {new Date().getFullYear()}, written by <strong>{author}</strong>. <br/>something creative, something foolish, something passionate...
              <br />
            
              <DisplayLink to={`https://instagram.com/${instagram}`} desc="Please follow him on Instagram" />

          <br/>ver {version}</p>
      </div>
    </div>
  )


}

export default Footer


