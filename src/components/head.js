import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function Head(props) {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`}/>
    )
}

export default Head
