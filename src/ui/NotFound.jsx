import React from "react"
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core"
import {AppTheme} from "../lib/theme"

function NotFound(props) {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={createMuiTheme(AppTheme)}>
      <div className={`${classes.root}`}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12} style={{ zIndex: 10, textAlign: "center" }}>
            <img
              alt="Not found image"
              className={classes.banner}
              src={`assets/illustrations/404 Page Not Found _Two Color.svg`}
            />
            <Typography variant="body1" gutterBottom align="center">
              Page introuvable
            </Typography>
            <Button
              size="medium"
              color="secondary"
              variant="contained"
              className={classes.button}
              href={"/"}
            >
              Accueil
            </Button>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: (8 + 1) * 10,
    paddingBottom: (8 + 1) * 10,
    [theme.breakpoints.up("sm")]: {
      paddingTop: (8 + 1) * 20,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  banner: {
    height: 250
  }
}))

export default NotFound
