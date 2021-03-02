import React from "react"
import { graphql } from 'gatsby'
import Gallery from '../components/gallery'
import Layout from "../components/layout"
// import Image from "gatsby-image"
import SEO from "../components/seo"
import '../styles/index.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const IndexPage = ({ data }) => {
  const Index = data.index.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <div className="uppder-body">
        <div className="upper-text">
          {Index.map((item) => {
            return (
              <p>
                {documentToReactComponents(JSON.parse(item.mainText.raw))}
              </p>
            )
          })}
        </div>
        <Gallery />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
{
    index: allContentfulIndex {
        nodes {
          id
          mainText {
            raw
          }
        }
      }
  }
`