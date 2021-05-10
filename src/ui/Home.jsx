import React, { useContext } from "react"
import { 
  Typography, 
  makeStyles, 
  Grid, 
  MuiThemeProvider,
  createMuiTheme, 
  Button
 } from "@material-ui/core"
import {AppTheme} from "../lib/theme"
import {Web3Context} from "../lib/Web3Context"
import {MyContractContext} from "../lib/MyContractContext"

const Home = (props) => {
  const classes = useStyles()

  const web3Context = useContext(Web3Context)
  const MyContract = useContext(MyContractContext)

  MyContract.deployed()
    .then(function(instance) {
      // Log connected accounts
      //web3Context.eth.getAccounts().then(console.log)
      
      // Do something with instance...
    }).then(function(result) {
      // Get the result
    })

  const handleAction = () => {
    // Do some actions here...
  }

  return (
    <MuiThemeProvider theme={createMuiTheme(AppTheme)}>
      <main className={classes.root}>
        <div className={classes.appBarSpacer} />

        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <Grid item xs={12} md={8} lg={8} container justify="center">

            <Grid item xs={12}>
              <Typography component="div" align="center" gutterBottom>
                <img 
                  alt="" 
                  className={classes.imageBanner}
                  src="assets/illustrations/Ethereum_Two Color.svg"
                />
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Welcome to React+Material-UI truffle box
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Button 
                fullWidth
                size="large"
                variant="contained"  
                color="secondary" 
                onClick={handleAction}
              >
                Do action
              </Button>
            </Grid>

          </Grid>
        </Grid>

      </main>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10)
  },
  imageBanner: {
    height: 250
  }
}))

export default Home
