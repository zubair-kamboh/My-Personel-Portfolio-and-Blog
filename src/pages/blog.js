import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button, CardActionArea } from "gatsby-theme-material-ui";
import Img from "gatsby-image";
import {
  Typography,
  Box,
  Container,
  makeStyles,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

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

const Blog = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Blog" />
      <Box component="section" className={classes.section}>
        <Container maxWidth="md">
          <Box className={classes.innerContainer}>
            <Typography gutterBottom variant="h3" color="primary">
              Here you’ll find past articles & blog posts.
            </Typography>

            {data.allMarkdownRemark.edges.map((post) => {
              return (
                <Card className={classes.card} key={post.node.id}>
                  <CardActionArea to={post.node.frontmatter.path}>
                    <Img
                      fluid={
                        post.node.frontmatter.featuredImage.childImageSharp
                          .fluid
                      }
                      alt={post.node.frontmatter.title}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.node.frontmatter.title}
                      </Typography>
                      <Typography gutterBottom>
                        Written By {post.node.frontmatter.author} on{" "}
                        {post.node.frontmatter.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.node.excerpt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      to={post.node.frontmatter.path}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

{
  /* {data.allMarkdownRemark.edges.map((post) => {
          return (
            <Box
              key={post.node.id}
              width="50%"
              boxShadow={2}
              margin="auto"
              p={5}
            >
              <Typography variant="h5">
                {post.node.frontmatter.title}
              </Typography>
              <Typography variant="body1">
                Written by {post.node.frontmatter.author}
              </Typography>
              <Link
                underline="none"
                color="error"
                to={post.node.frontmatter.path}
              >
                Go to post
              </Link>
            </Box>
          );
        })} */
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
          excerpt
          id
        }
      }
    }
  }
`;

export default Blog;
