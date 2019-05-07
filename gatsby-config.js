module.exports = {
  siteMetadata: {
    title: 'Golf With Peter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Golf With Peter',
        short_name: 'Golf With Peter',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#10B523',
        display: 'minimal-ui',
        icon: 'src/images/noun_golfer_1946299.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 't631xnl3',
        dataset: 'videos'  
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    `gatsby-plugin-netlify`
  ],
}
