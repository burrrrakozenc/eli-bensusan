const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const designedObjectTemplate = path.resolve('src/templates/designed-objects.js')
        const paintingsTemplate = path.resolve('src/templates/paintings.js')

        resolve(
            graphql(`
            {
                designed: allContentfulDesignedObject( limit: 100) {
                    edges {
                      node {
                        slug
                        id
                  }
                }
              }
                paintings: allContentfulPaintings( limit: 100) {
                    edges {
                      node {
                        slug
                        id
                  }
                }
              }
            }
            `).then((result) => {
                result.data.designed.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: designedObjectTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                result.data.paintings.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: paintingsTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}