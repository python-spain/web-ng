const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Generate slug field for all markdown files
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `content` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    createRedirect({ fromPath: `/pages/asociacion.html`, toPath: `/asociacion/`, redirectInBrowser: true, isPermanent:true });
    createRedirect({ fromPath: `/pages/ofertas-de-empleo.html`, toPath: `/empleo/`, redirectInBrowser: true, isPermanent:true });
    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        basic: allMarkdownRemark(
                            filter: {
                                fileAbsolutePath: { regex: "content/basic/.*/" }
                            }
                        ) {
                            edges {
                                node {
                                    id
                                    excerpt
                                    html
                                    frontmatter {
                                        title
                                        path
                                        template
                                    }
                                    fields {
                                        slug
                                    }
                                }
                            }
                        }
                        posts: allMarkdownRemark(
                            filter: {
                                fileAbsolutePath: { regex: "content/posts/.*/" }
                            }
                            sort: { fields: [frontmatter___date], order: DESC }
                        ) {
                            edges {
                                node {
                                    id
                                    excerpt
                                    frontmatter {
                                        title
                                        date(formatString: "DD MMMM YYYY")
                                        image
                                    }
                                    fields {
                                        slug
                                    }
                                }
                            }
                        }
                        eventos: allMarkdownRemark(
                            filter: {
                                fileAbsolutePath: {
                                    regex: "content/eventos/.*/"
                                }
                            }
                            sort: { fields: [frontmatter___date], order: DESC }
                        ) {
                            edges {
                                node {
                                    id
                                    excerpt
                                    frontmatter {
                                        title
                                        date
                                        fullDate
                                        featured
                                        image
                                        logo
                                        website
                                    }
                                    fields {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                result.data.basic.edges.forEach(({ node }) => {
                    let component = path.resolve('src/templates/basic.js');
                    if (node.frontmatter.template) {
                        component = path.resolve(
                            `src/templates/${node.frontmatter.template}.js`
                        );
                    }
                    createPage({
                        path: node.frontmatter.path
                            ? node.frontmatter.path
                            : node.fields.slug,
                        component,
                        context: {
                            id: node.id,
                        },
                    });
                });
                result.data.posts.edges.forEach(({ node }) => {
                    const component = path.resolve('src/templates/posts.js');
                    createPage({
                        path: node.frontmatter.path
                            ? node.frontmatter.path
                            : node.fields.slug,
                        component,
                        context: {
                            id: node.id,
                        },
                    });
                });
                result.data.eventos.edges.forEach(({ node }) => {
                    const component = path.resolve('src/templates/evento.js');
                    createPage({
                        path: node.frontmatter.path
                            ? node.frontmatter.path
                            : node.fields.slug,
                        component,
                        context: {
                            id: node.id,
                        },
                    });
                });
                resolve();
            })
        );
    });
};
