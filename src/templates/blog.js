import React from 'react'
import {graphql} from 'gatsby' 
import { BLOCKS } from '@contentful/rich-text-types';

import { renderRichText } from "gatsby-source-contentful/rich-text"


import Layout from '../components/layout'
import Head from '../components/head';

export const query = graphql`
query (
  $slug: String!
){
  contentfulBlogPost (slug:{eq: $slug}){
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body{
        raw
        references {
      ... on ContentfulAsset {
        contentful_id
        __typename
        title
        fixed(width: 750) {
          width
          height
          src
          srcSet
        }
      }
      
    }
      }
  }
}
`



function Blog(props) {
  const options = {
    renderNode:{
      [BLOCKS.EMBEDDED_ASSET]:(node)=>{
        // console.log(node)
        const alt=node.data.target.title
        const url=node.data.target.fixed.src
        return <img  src={url} alt={alt}/>
      }
    }
  }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
           <h1>{props.data.contentfulBlogPost.title}</h1>
           <p>{props.data.contentfulBlogPost.publishedDate}</p>
             <div>{renderRichText(props.data.contentfulBlogPost.body,options)}</div>
        </Layout>
    )
}

export default Blog
