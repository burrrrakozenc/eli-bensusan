
import React from 'react'
import PropTypes from "prop-types"

import { Link, graphql, StaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import './header.css'



Gallery.propTypes = {
  siteTitle: PropTypes.string,
}

Gallery.defaultProps = {
  siteTitle: ``,
}

export default function Gallery({ siteTitle }) {
  return (
    <StaticQuery
      query={graphql`
    query {
      allContentfulNavigation(sort: {fields: orderNumber, order: DESC}) {
        nodes {
          id
          title
          slug
        }
      }
    }
    `}
      render={data => (
        <div className="wrapper">
          <header>
            <div
              style={{
                margin: `0 auto`,
                // padding: `5rem 5rem 2rem 5rem`,
                // maxWidth: '960'
              }}
              className="container"
            >
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: `#000000`,
                    fontSize: `47px`,
                    fontWeight: 'lighter',
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
                <h3 style={{
                  color: 'lightgray',
                  fontSize: '13px',
                  paddingTop: '15px'
                }}>
                  designer.
        </h3>
              </h1>
              <nav
                style={{
                  color: `#000000`,
                  textDecoration: `none`,
                  // overflow: 'hidden',
                  paddingTop: '15px',
                }}>
                <ul style={{
                  // display: 'flex',
                  paddingTop: '15px',
                  // justifyContent: 'center',
                }}>
                  {
                    data.allContentfulNavigation.nodes.map((item) => {
                      return (

                        <li>
                          <Link className="header-link" activeStyle={{color:'black'}} to={`/${item.slug}`}>
                            {item.title}
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>
            </div>
          </header>
          <hr style={{ width: '100%', margin: '0 auto', maxWidth: '920px' }} />
          <div style={{ paddingBottom: '2rem' }}></div>
        </div>
      )}
    />
  )
}

