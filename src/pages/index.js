import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Landing from '../components/landing/landing'
import Main from '../components/main/main'
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Golf With Peter</title>
      <meta name='description' content='Personalized 1-on-1 Golf Instruction. No matter your age or skill level, improve your game with Altadena Golf Course Head Professional Peter Barrow.' />
    </Helmet>
    <Landing />
    <Main />
  </Layout>
)

export default IndexPage
