import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DisplayLink from "../components/displayLink"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
    <p> <DisplayLink  to="/" desc="Back to Home" /></p>
  </Layout>
)

export default NotFoundPage
