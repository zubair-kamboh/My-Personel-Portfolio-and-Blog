import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: `${theme.spacing(2)}px auto`,
      width: "80%",
    },

    "& input": {
      color: "#fff",
    },

    "& label": {
      color: "#fff",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #fff",
    },
    "& .MuiInput-underline:after": {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  bgColor: {
    background: theme.palette.primary.main,
    color: "#fff",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  },

  formStyles: { background: "#1F426B" },

  spanStyles: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },

  SubmitStyles: {
    marginTop: theme.spacing(3),
  },

  Title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },

  TitleHeading: {
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

const Contact = () => {
  const classess = useStyles();

  return (
    <Box className={classess.bgColor} component="section">
      <Grid container>
        <Grid item xs={0} md={1} />
        <Grid item sm={12} md={5} className={classess.Title}>
          <Typography variant="h3" className={classess.TitleHeading}>
            Contact {` `}
            <Typography
              component="span"
              variant="h2"
              className={classess.spanStyles}
            >
              US.
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={classess.root}
            autoComplete="off"
            style={{
              background: "#1F426B",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "40px 0px 64px 0px",
              boxShadow:
                "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
            }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <TextField
              id="standard-basic username"
              name="username"
              label="Full Name"
              color="secondary"
            />

            <TextField
              id="standard-basic email"
              name="email"
              label="Email"
              color="secondary"
            />

            <TextField
              id="standard-basic message"
              name="message"
              label="Message"
              color="secondary"
            />

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
              className={classess.SubmitStyles}
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </Box>
  );
};

export default Contact;
