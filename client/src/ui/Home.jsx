import React, { useContext, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  createTheme,
  ThemeProvider, Stack
} from "@mui/material";
import {AppTheme} from "../lib/theme";
import {MyContractContext} from "../lib/MyContractContext";

const Home = (props) => {
  const MyContract = useContext(MyContractContext);

  const handleAction = () => {
    // Do some actions here...
  };

  useEffect(() => {
    MyContract
      ?.deployed()
      ?.then(async function(instance) {
        // Do something with instance...
      })
      ?.catch(e => {
        // Failed to load web3, accounts, or contract. Check console for details.
        // console.error(e);
      });
  },);

  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <Box sx={{ p: 2, pt: 10, flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            container
            xs={12} md={8} lg={8}
            justifyContent="center"
          >
            <Stack direction="column">
              <Typography component="div" align="center" gutterBottom>
                <img
                  alt=""
                  style={{ height: 250 }}
                  src="Ethereum_Two Color.svg"
                />
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Welcome to React+Mui truffle box
              </Typography>
              <Button
                size="large"
                target="_blank"
                color="primary"
                disableElevation
                variant="contained"
                onClick={handleAction}
                href={'https://trufflesuite.com/docs/truffle/'}
              >
                Get started with truffle doc
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
