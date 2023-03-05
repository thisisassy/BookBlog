import * as React from "react"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Layout pageTitle="The Art of Tsundoku"></Layout>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO pageTitle="" />
)
