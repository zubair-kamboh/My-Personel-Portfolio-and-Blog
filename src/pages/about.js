import * as React from "react";
import Layout from "../components/layout";
import { Paper, Typography, Box } from "@material-ui/core";

const AboutPage = () => (
  <>
    <Layout pageTitle="About Page" />
    <Paper>
      <Box>
        <Typography>About ME</Typography>
      </Box>
    </Paper>
  </>
);

export default AboutPage;
