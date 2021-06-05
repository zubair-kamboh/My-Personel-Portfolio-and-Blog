import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/Home/hero";
import AboutMe from "../components/Home/aboutMe";
import Services from "../components/Home/services";
import { CssBaseline } from "@material-ui/core";

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page" />
      <Hero />
      <AboutMe />
      <Services />
      <CssBaseline />
    </>
  );
};

export default IndexPage;
