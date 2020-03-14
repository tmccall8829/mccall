import React from "react"
import Header from "../components/header.js"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/about">About</Link>
    <Header headerText = "Welcome!"/>
    <p>What's up, nerds</p>
  </div>
)
