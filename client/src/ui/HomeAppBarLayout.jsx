import React, { useState, useContext, useEffect, useCallback } from "react";
import { AppTheme } from "../lib/theme";
import {Web3Context} from "../lib/Web3Context";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Box,
  Menu,
  AppBar,
  Button,
  Toolbar,
  MenuItem,
  IconButton,
  Typography,
  CssBaseline,
  createTheme,
  ThemeProvider
} from "@mui/material";


function HomeAppBarLayout(props) {
  const web3Context = useContext(Web3Context);
  const [account, setAccount] = useState();
  const [anchorEl, setAanchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // eslint-disable-next-line
  const initConfig = useCallback(() => {
    web3Context.eth.requestAccounts((error, coinbaseAddress) => {
      if (error) {
        setAccount(null);
        return console.error(error);
      }
      if (coinbaseAddress !== account){
        setAccount(coinbaseAddress);
      }
    });
  }, [account, web3Context.eth]);

  useEffect(() => {
    setTimeout(() => {
      initConfig();
    }, 500);
  },)

  const handleProfileMenuOpen = (event) => {
    setAanchorEl(event.currentTarget);
  }

  const handleMenuClose = (param = null) => {
    setAanchorEl(null);
    handleMobileMenuClose();
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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
  );

  const renderMobileMenu = (
    <Menu
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem dense onClick={handleMobileMenuClose}>
        This is a menu
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={0}>
          <Toolbar variant="dense" sx={{ px: { xs: 1, md: 2 } }}>
            <Typography
              noWrap
              variant="h6"
              sx={{
                cursor: "pointer",
                alignSelf: "center",
                fontWeight: "bolder"
              }}
            >
              Truffle+React+Mui
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              size="small"
              sx={{ m: 1, color: '#fff' }}
            >
              {account || 'Disconnected'}
            </Button>
            <IconButton
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              aria-owns={isMenuOpen ? "material-appbar" : undefined}
            >
              <AccountCircle htmlColor="#fff" fontSize={"small"} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </Box>
    </ThemeProvider>
  );
}

export default HomeAppBarLayout;
