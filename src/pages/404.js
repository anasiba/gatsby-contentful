import { Link } from 'gatsby'
import React from 'react'
import Head from '../components/head'

import Layout from '../components/layout'

function NotFound() {
    return (
        <Layout>
            <Head title="Not Found"/>
            <h1>Page Not Found </h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound
