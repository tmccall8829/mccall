import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography.js"

import Footer from './footer.js'

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(0),
          marginTop: rhythm(0),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
