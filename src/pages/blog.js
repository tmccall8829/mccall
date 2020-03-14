import React from 'react'
import Post from '../components/post'
import Container from '../components/container'
import Header from '../components/header'

export default () => (
  <Container>
    <Header headerText="Blog"/>
    <Post postTitle='My post!' postContent='My content!'/>
  </Container>
)
