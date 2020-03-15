import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { rhythm } from "../utils/typography.js"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (

          <article key={node.fields.slug}>
            <header>
              <h2
                style={{
                  marginTop: rhythm(1.5), // space between post title and page title
                  marginBottom: rhythm(0.1), // space between post title and post date/summary
                }}
              >
                <Link style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                }}
                to={node.fields.slug}
                >
                  {title}
                </Link>
              </h2>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
