import React from "react"
import {  graphql } from "gatsby"
import Gallery from '../components/gallery'
import Layout from "../components/layout"
// import Image from "gatsby-image"
import SEO from "../components/seo"
import '../styles/index.css'

const IndexPage = ({ data }) => {
  // const { allContentfulAsset: { nodes: home },
  // } = data
  const IndexImages = data.indexImages.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <div className="uppder-body">
        <div className="upper-text">
          <p>
            I try to express the myths and rituals of worlds I imagine through design, mixed media arts and poetry. I try to restructure the ontological layers of objects such as material, form, function, meaning, agency, and poetry, to propose different behaviors. This way I explicate our norms and routines, questioning our current way of living by proposing alternatives.
      </p>
          <p>
            I am currently working on different design projects, teaching at Medipol University Industrial Design Department, and am an artist in Residence at Gate27 artist residency.
      </p>
          <p>
            Besides my creations I try to read about philosophy, improve my cooking skills, and organize Istanbul Poetry Slam, an open mic event where people perform poetry. <p></p>
          </p>
        </div>
      </div>
      <div className="gallery-wrapper">
        <Gallery/>
      </div>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
// query HomepageQuery {
//   indexImages: allContentfulAsset(filter: {title: {eq:"designed object"}})  {
//     nodes {
//       localFile {
//         childImageSharp {
//           fixed {
//             src
//           }
//         }
//         id
//       }
//     }
//   }
// }
// `



// allContentfulIndex2 {
//   nodes {
//     gallery {
//       fixed {
//         src
//       }
//       id
//     }
//     title
//     copy
//     id
//   }
// }