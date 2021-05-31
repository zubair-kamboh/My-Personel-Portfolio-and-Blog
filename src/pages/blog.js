import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Typography, Box, Container } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const blog = ({ data }) => {
  return (
    <>
      <Layout pageTitle="Blog" />
      <Typography
        variant="h2"
        align="center"
        gutterBotto
        style={{ marginTop: "15px" }}
        color="primary"
      >
        Blog
      </Typography>

      <Container fixed style={{ marginBottom: "70px", marginTop: "40px" }}>
        <Box>
          <Typography variant="h3">This is my heading</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            assumenda. Sequi rerum consectetur voluptates, earum voluptatibus
            saepe eius commodi sunt inventore, provident molestiae facilis
            sapiente in aperiam maxime, suscipit optio recusandae tempora
            corrupti accusamus perspiciatis? Excepturi itaque totam modi
            recusandae illo. Laudantium ab, similique, enim non adipisci nostrum
            consequatur, cum a expedita eligendi corporis repellendus sequi
            ullam neque corrupti. Ratione nemo nihil nisi adipisci tempora eaque
            voluptatem rerum esse amet molestias. Facere magni aspernatur labore
            dolore, incidunt vero rerum quia corrupti alias quibusdam voluptate!
            Nihil eveniet excepturi consectetur voluptatum, repudiandae
            voluptate quidem, maxime quae veniam, voluptatibus porro iure
            facilis culpa?
          </Typography>
        </Box>
      </Container>

      {data.allMarkdownRemark.edges.map((post) => {
        return (
          <Box key={post.node.id} width="50%" boxShadow={2} margin="auto" p={5}>
            <Typography variant="h5">{post.node.frontmatter.title}</Typography>
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
      })}
    </>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            author
            date
            path
            title
          }
          id
        }
      }
    }
  }
`;

export default blog;
