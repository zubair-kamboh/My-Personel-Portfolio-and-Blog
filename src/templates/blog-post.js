import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Typography, Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: `${theme.spacing(4)}px 0px ${theme.spacing(14)}px 0px`,
    // "2rem 0rem 7rem 0rem"
  },

  innerContainer: {
    backgroundColor: "#fff",
    padding: theme.spacing(8),
  },

  card: {
    marginBottom: theme.spacing(3),
  },

  media: {
    height: 400,
    objectFit: "contain",
    width: "100%",
  },
}));

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Blog" />
      <article>
        <Box component="section" className={classes.section}>
          <Container maxWidth="md">
            <Box className={classes.innerContainer}>
              <Typography
                gutterBottom
                variant="h3"
                color="primary"
                itemProp="headline"
              >
                {post.frontmatter.title}
              </Typography>
              <Typography gutterBottom itemProp="writterby">
                Written By {post.frontmatter.author} on {post.frontmatter.date}
              </Typography>
              <Img
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                alt={post.frontmatter.title}
                className={classes.media}
              />

              <article>
                <Typography
                  variant="body1"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </article>
            </Box>
          </Container>
        </Box>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
