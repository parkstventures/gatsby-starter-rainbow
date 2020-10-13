import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFeatured from '../components/featured'





import AllSearch from "../components/allSearch"
import ColoredLine from "../components/drawLine"

export default ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        
        <ColoredLine color="red" />
        <BlogFeatured />
        <ColoredLine color="red" />
        
        <AllSearch />
      </Layout>
    </>
  );
};
