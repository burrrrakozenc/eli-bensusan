const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const designedObjectTemplate = path.resolve('src/templates/designed-objects.js')

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
                return
            })
        )
    })
}