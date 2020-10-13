import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"




import AllSearch from "../components/allSearch"


export default ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <AllSearch  />

      </Layout>
    </>
  );
};