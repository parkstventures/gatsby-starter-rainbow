import React from "react"

const ColoredLine = ({ color }) => (
    <hr
        style={{
            display: `block`, 
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

export default ColoredLine
