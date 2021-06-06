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

    "& .MuiInputBase-input": {
      color: "#fff",
    },

    "& .MuiFormLabel-root": {
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
  },

  TitleHeading: {
    letterSpacing: theme.spacing(1),
  },
}));

const Contact = () => {
  const classess = useStyles();
  return (
    <Box className={classess.bgColor}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item sm={12} md={5} className={classess.Title}>
          <Typography variant="h3" className={classess.TitleHeading}>
            Contact
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
            className={classess.root}
            noValidate
            autoComplete="off"
            style={{
              background: "#1F426B",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "40px 0px 64px 0px",
            }}
          >
            <TextField id="standard-basic" label="Name" color="secondary" />
            <TextField id="standard-basic" label="Email" color="secondary" />
            <TextField id="standard-basic" label="Message" color="secondary" />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={classess.SubmitStyles}
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Contact;