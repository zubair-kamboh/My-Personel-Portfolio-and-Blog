import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <Layout pageTitle="post" />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  );
}

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
