import React from "react"

import ColoredLine from "./drawLine"
import AllTags from "./allTags"
import AllCategories from "./allCategories"

/* search component embedding tags and categories */
const AllSearch = () => {
  return (
    <>
    
        
        <ColoredLine color="red" />
        <AllCategories  />
        <ColoredLine color="red" />
        <AllTags />
    
    </>
  );
};

export default AllSearch