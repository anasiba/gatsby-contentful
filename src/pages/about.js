import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

function AboutPage() {
  return (
    <Layout>
      <Head title="About Us"/>
      <h1>Title</h1>
      <p>bio</p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
