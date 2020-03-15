import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography.js"

import Footer from './footer/footer.js'

const Layout = ({ location, title, children }) => {
  let header

  header = (
      <h1
        style={{
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
