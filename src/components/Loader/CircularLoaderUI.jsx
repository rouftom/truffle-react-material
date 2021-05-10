import React from "react"
import { AppTheme } from "../../lib/theme"
import {
  CircularProgress,
  Typography,
  Grid,
  makeStyles,
	createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core"

function CircularLoaderUI() {
  const classes = useStyles()

  return (
		<MuiThemeProvider theme={createMuiTheme(AppTheme)}>
			<main className={classes.root}>
				<Grid container spacing={3} justify="center">
					<Grid item xs={12}>
						<Typography component="div" align="center">
							<CircularProgress color="secondary" variant="indeterminate" />
							<Typography variant="body2">Loading...</Typography>
						</Typography>
					</Grid>
				</Grid>
			</main>
		</MuiThemeProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(15)
  }
}))

export default CircularLoaderUI
