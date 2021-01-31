import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/head";

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss";

function BlogPage() {
 

  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields:publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post}>
            <Link to={edge.node.slug}>
              <h2>{edge.node.title}</h2>
            <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
