import React from "react";
import Layout from "../components/layout";
import Contact from "../components/Home/contact";
import Seo from "../components/seo";

const contact = () => {
  return (
    <>
      <Layout>
        <Seo title="Contact Us" />
        <Contact />
      </Layout>
    </>
  );
};

export default contact;
