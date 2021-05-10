import React, { useState, useContext } from "react"
import { AppTheme } from "../../lib/theme"
import {Web3Context} from "../../lib/Web3Context"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Menu,
  Grid,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"

/**
 * @name HomeAppBarLayout
 * @function HomeAppBarLayout
 * @description
 */
function HomeAppBarLayout(props) {
  const classes = useStyles()
  const theme = useTheme()
  const web3Context = useContext(Web3Context)
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"))

  const [account, setAccount] = useState("Déconnecté")
  const [anchorEl, setAanchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)


  web3Context.eth.getCoinbase((error, account) => {
    if (error) return console.log(error)
    // On assigne l'adresse de l'utilisateur au state
    setAccount(account)
  })

  const handleProfileMenuOpen = (event) => {
    setAanchorEl(event.currentTarget)
  }

  const handleMenuClose = (param = null) => {
    setAanchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const renderMenu = (
    <Menu
      open={isMenuOpen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem dense onClick={handleMenuClose}>
        This is a menu
      </MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem dense onClick={handleMobileMenuClose}>
        This is a 
      </MenuItem>
    </Menu>
  )

  return (
    <MuiThemeProvider theme={createMuiTheme(AppTheme)}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar variant="dense">
            <Grid container justify="center">
              <Grid 
                item container spacing={3} 
                xs={12} sm={12} md={12} lg={12}
              >
                <Typography
                  noWrap
                  variant="h6"
                  color="secondary"
                  className={classes.title}
                >
                  MyContract
                </Typography>
                <div className={classes.grow} />
                <Button
                  size="small"
                  color="secondary"
                  className={classes.button}
                >
                  {account}
                </Button>

                <IconButton
                  color="secondary"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  aria-owns={isMenuOpen && "material-appbar" || undefined}
                >
                  <AccountCircle fontSize={"small"} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {renderMenu}
        {renderMobileMenu}
      </div>
    </MuiThemeProvider>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  button: { margin: 8 },
  grow: { flexGrow: 1 },
  title: {
    alignSelf: "center",
    fontWeight: "bolder",
    cursor: "pointer",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  displaySmUp: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  hideMdUp: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default HomeAppBarLayout
