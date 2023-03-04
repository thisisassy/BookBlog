import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hey, I'm Haruka. A Content Creator focused on writing Booklog.</p>
    </Layout>
  )
}

export const Head = () => <title>About me</title>
export default AboutPage