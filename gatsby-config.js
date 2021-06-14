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

    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
};
