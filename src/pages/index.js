import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Landing from '../components/landing/landing'
import Main from '../components/main/main'

const IndexPage = () => (
  <Layout>
    <Landing />
    <Main />
  </Layout>
)

export default IndexPage
