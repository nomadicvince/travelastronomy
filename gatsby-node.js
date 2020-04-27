const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');


exports.createPages = async({ actions, graphql}) => {
   const {createPage} = actions

   const {data} = await graphql(`
   query {
    blogs: allContentfulBlogPost(sort:{fields:date, order:DESC}){
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

   
    //amount of posts
    const posts = data.blogs.edges;
    //posts per page
    const postsPerPage = 8;
    //number of pages
    const numPages = Math.ceil(posts.length/postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blogs/` : `/blogs/${i+1}`,
        component: path.resolve("./src/templates/blogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        }
      })
    })

}