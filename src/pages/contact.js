import React from "react";
import Layout from "../components/layout";
import Contact from "../components/Home/contact";
import SEO from "../components/seo";

const contact = () => {
  return (
    <>
      <Layout>
        <SEO title="Contact Us" />
        <Contact />
      </Layout>
    </>
  );
};

export default contact;
