import { useStaticQuery,graphql } from 'gatsby'
import React from 'react'

import footerStyles from './footer.module.scss'

function Footer() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created with ❤ By {data.site.siteMetadata.author}, &copy; 2020 </p>
        </footer>
    )
}

export default Footer
