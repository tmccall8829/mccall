import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <Link to="/">Home</Link>
    <br></br>
    <Link to="/about">About</Link>
    <br></br>
    <Link to="/blog">Blog</Link>
    <h1>{props.headerText}</h1>
  </div>
)
