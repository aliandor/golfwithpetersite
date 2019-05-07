import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Foot from './footer'
import '../index.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'golf with peter', content: 'come learn golf with Peter Barrow' },
            { name: 'golf, altadena, altadena golf course, peter barrow, golf lessons', content: 'golf lessons in altadena, ca' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Foot />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
