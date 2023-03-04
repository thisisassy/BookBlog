import * as React from "react"
import { SEO } from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="The Art of Tsundoku">
      <p>A Lifestyle Blog with Reading for Bookish</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO pageTitle="" />
)
