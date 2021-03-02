import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/index.css'


export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
    query {
      allContentfulPaintings(filter: {hero: {id: {}}}) {
        nodes {
          title
          slug
          id
          hero {
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
    `}
      render={data => (
        <div className="gallery-wrapper">
          {
            data.allContentfulPaintings.nodes.map((item) => {
              return (
                <div className="gallery" key={item.id}>
                  <Link to={`/${item.slug}`}>
                    <Img fixed={item.hero.localFile.childImageSharp.fixed} alt="aa" className="gallery-image" />
                  </Link>
                  <div className="desc">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      )}
    />
  )
}