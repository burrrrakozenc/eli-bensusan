// import { graphql } from 'gatsby'
import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/index.css'


export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
    query {
      allContentfulAsset {
        nodes {
          localFile {
            childImageSharp {
              fixed {
                src
              }
            }
            id
          }
        }
      }
    }
    `}
      render={data => (
        <div className="gallery-wrapper" style ={{margin:'0'}}>
          {
            data.allContentfulAsset.nodes.map((item) => {
              return (
                <div className="gallery" key={item.id}>
                  <Link to="/object1">
                    <Img fixed={item.localFile.childImageSharp.fixed} alt="aa" className="gallery-image" />
                  </Link>
                  <div className="desc">aa asdhajks adjskdhasjk jksja</div>
                </div>
              )
            })
          }
        </div>
      )}
    />
  )
}

// const Gallery = ({ data }) => {
//   const GalleryQuery = data.images.nodes
//   return (
//     <div>
//       {GalleryQuery.map((item) => {
//         return (
// <div className="gallery" key={item.id}>
//   <Link to="/object1">
//     <Img fixed={item.localFile.childImageSharp.fixed} alt="aa" className="gallery-image" />
//   </Link>
//   <div className="desc">aa asdhajks adjskdhasjk jksja</div>
// </div>
//         )
//       }
//       )}
//     </div>
//   )
// }

// export const query = graphql`
// query HomepageQuery {
//   images: allContentfulAsset {
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
// export default Gallery