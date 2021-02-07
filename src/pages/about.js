import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../styles/about.css'

const About = ({ data }) => {
    const AboutMe = data.about.nodes
    // const {
    //     image,
    //     textAboutMe
    // } = this.props.data.about

    return (
        <Layout>
            <div className="about-wrapper">
                {AboutMe.map((item => {
                    return (
                        <div className="about-container">
                            <figure className="eli-outside" key={item.id}>
                                <Image  className="eli-image" fixed={item.image.fixed} alt="aa" />
                            </figure>
                            <article className="text-article">
                                <p className="text-p">
                                    {documentToReactComponents(JSON.parse(item.textAboutMe.raw))}
                                </p>
                            </article>
                        </div>
                    )
                }))}
            </div>
        </Layout>
    )
}

export default About

export const query = graphql`
{
    about: allContentfulAboutMe {
        nodes {
          image {
            id
            fixed {
              src
            }
          }
          id
          textAboutMe {
            raw
          }
        }
      }
  }
`