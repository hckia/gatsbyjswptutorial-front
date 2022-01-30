module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Starter`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `@tomphill`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: "gatsbyjswptutorial.local",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        // acfOptionPageIds: [],
        /*auth: {
          // if auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,
          // if hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https//developer.wordpress.com
          // then add your clientId, clientSecret, username, and password here.
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // if two-factor authentication is enabled then you need to create an Application-Specific Passwords...
          // see https://en.support.wordpress.com/security/two-step/authentication/#application-specific-password
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "#####",
          wpcom_user: "blahblah@blah.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // if you use "JWT Authentcation for WP REST API" (https://wordpress.org/plugins/jwt-authentication)
          // plugin, you can use specific user and password to obtain access token
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },*/
        // for debugging
        verboseOutput: false,
        perPage: 100,
        // search and replace urls across WordPress contnet.
        /*searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        }, */
        concurrentRequests: 10,
        // menus included via WP REST API Menus plugin to save time.
        // * are wildcard options, so base_url/wp-json/wp/v2/custom_post_type would be...
        // **/*/*/custom_post_type
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/portfolio"
        ],
        // Blacklisted routes using glob patterns
        /* excludedRoutes: [''],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function ({ }) {
          return entities
        }, */
      },
    },
  ],
}
