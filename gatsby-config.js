module.exports = {
  siteMetadata: {
    title: "Zubair Ali Blogs and Portfolio Website",
    description:
      "Zubair Ali Blogs is a blogging platform that also provides the best web development services remotely in Pakistan, we are a Freelance based agency that helps clients build any type of website, web apps, SEO based services.",
    url: "http://zubairkamboh.com",
    keywords:
      "Zubair Ali Blog, Zubair Ali Portfolio, Best Freelance Services Available in Pakistan, Freelancer, Blogger, Best Reactjs developer in Pakistan",
    image: "/src/images/zubair-picture.png",
    twitterUsername: "@Zubairkamboh901",
    author: "Zubair Ali",
    ogType: "website",
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-176953993-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "UA-176953993-2",
        // Enables Google Optimize Experiment ID
        experimentId: "UA-176953993-2",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "UA-176953993-2",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zubair Ali`,
        short_name: `Zubair Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/za.png`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
};
