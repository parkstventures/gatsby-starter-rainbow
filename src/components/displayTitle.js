import React from "react"

const titleStyle = {
  marginRight: "0",
  fontSize: "smaller"
}

const DisplayTitle = ({ title }) => {

    return (
      <>
        <div style={titleStyle}>{title}</div>
      </>
    )
  }
  
  export default DisplayTitle