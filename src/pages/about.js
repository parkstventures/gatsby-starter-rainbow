import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AllSearch from "../components/allSearch"
import ColoredLine from "../components/drawLine"
import AboutPage from '../staticContent/about.md'
import FAQ from "../staticContent/faq.md"

export default ({ data }) => {

  
  return (
    <>
      <Layout>
        <SEO title="About" />
        <AboutPage />
        <ColoredLine color="red" />
        <FAQ />
        
        <AllSearch />
      </Layout>
    </>
  );
};
