import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

function ContactPage() {
  return (
    <Layout>
      <Head title="Contact Us"/>
      <h1>Contact US</h1>
      <div>
        <div>Email: contact@info.com</div>
        <div>Phone Number: 07 07 07 07</div>
        <div>Addrress: 15 Rue 12, Casablanca</div>
        <div>
          Twitter:{" "}
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            @anass.iba
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
