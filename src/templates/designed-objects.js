import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Carousel } from 'react-responsive-carousel';
import * as PropTypes from 'prop-types'
import '../components/designed-objects.css'
import Img from 'gatsby-image'
import '../styles/carousel.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Gallery from '../components/gallery'


const propTypes = {
    data: PropTypes.object.isRequired,
}

class DesignedObject extends React.Component {
    render() {
        // const DesignedObjects = this.props.data.designedObjects.nodes
        const {
            title,
            carousel,
            headerTextRight,
            headerTextLeft
        } = this.props.data.contentfulDesignedObject
        return (
            <Layout>
                <div>
                    <div>
                        <Carousel showArrows={true} showStatus={false} showThumbs={true} showIndicators={false} infiniteLoop={true} centerMode={true} thumbWidth={'80px'}>
                            {carousel.map((image) => {
                                return (
                                    <Img className="carousel-image" key={carousel.id} fluid={image.fluid} />
                                )
                            })}
                        </Carousel>
                    </div>
                    <div className="article-wrapper">
                        <h3 className="designed-object-title">
                            {title}
                        </h3>
                        <article className="designed-object-article">
                            <div className="article-right">
                                <p>
                                    {documentToReactComponents(JSON.parse(headerTextLeft.raw))}
                                </p>
                            </div>
                            <div className="article-left">
                                <p>
                                    {documentToReactComponents(JSON.parse(headerTextRight.raw))}
                                </p>
                            </div>
                        </article>
                    </div>
                    <Gallery />
                </div>
            </Layout>
        )
    }
}

DesignedObject.propTypes = propTypes

export const query = graphql`
query DesignedObjectQuery($slug: String!) {
    contentfulDesignedObject(slug: {eq: $slug}) {
        carousel {
          fluid {
            src
          }
          id
        }
        headerTextRight {
            raw
        }
        headerTextLeft {
           raw
        }
        slug
        title
        id
    }
}
`

// export default(
//     graphql(
//       query1, 
//       {name: "data1"}
//     )(
//       graphql(
//         query2, 
//         {name: "data2"}
//       )(YourComponent)
//     )
//   )

export default DesignedObject