const path = require('path');

exports.createPages = async({ actions, graphql}) => {
   const {createPage} = actions

   const {data} = await graphql(`
   query {
    blogs: allContentfulBlogPost{
      edges{
        node{
          slug
        }
      }
    }
  }
   `)
    data.blogs.edges.forEach(({node}) => {
        createPage({
            path: `post/${node.slug}`,
            component: path.resolve("./src/templates/blogTemplate.js"),
            context: {
                slug:node.slug,
            }
        })
    })
}