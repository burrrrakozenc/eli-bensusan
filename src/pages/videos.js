import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import '../styles/videos.css'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Iframe 'gatsby-remark-responsive-iframe'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from '@contentful/rich-text-types';


const options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
            if (node.data.uri.indexOf('youtube.com') !== -1)
                return (
                    <iframe
                        // key={node.id}
                        width="779"
                        height="457"
                        src={node.data.uri}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        // style={{
                        //     marginTop:'5rem',
                        //     marginBottom:'3rem'
                        // }}
                    >

                    </iframe>
                )
            else if (node.data.uri.indexOf('player.vimeo.com') !== -1)
                return (
                    <iframe
                        width="779"
                        height="457"
                        src={node.data.uri}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        // style={{
                        //     marginTop:'rem',
                        //     marginBottom:'3rem'
                        // }}
                    >

                    </iframe>
                )
        }
    }
};

const Videos = ({ data }) => {
    const { allContentfulEmbedVideo: { nodes: videos },
    } = data

    return (
        <Layout>
            {videos.map(item => {
                return (
                    <div className="video-wrapper">
                        <div className="video-item">
                            <div className="video-title">
                                <p>
                                    {item.title}
                                </p>
                            </div>
                            <div className="video-container">
                                {documentToReactComponents(JSON.parse(item.video.raw), options)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </Layout>
    )
}

export default Videos

export const query = graphql`
{
    allContentfulEmbedVideo(sort: {order: ASC, fields: title}) {
        nodes {
          id
          title
          video {
            raw
          }
        }
      }
    }
`


// {/* <div className="iframe"
//                             dangerouslySetInnerHTML={{ __html: item.video1.childMarkdownRemark.html, }}
//                             style={{
//                                 width: '10rem', 
//                                 height: '10rem',
//                             }}
//                         /> */}