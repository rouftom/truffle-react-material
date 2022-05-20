import React from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  createTheme,
  ThemeProvider
} from "@mui/material";
import {AppTheme} from "../lib/theme";

function NotFound(props) {
  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <Box sx={{ flexGrow: 1, sm: { py: 8 }, py: 10 }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sx={{ zIndex: 10, textAlign: "center" }}
          >
            <img
              alt="Not found"
              style={{ height: 250 }}
              src={`Ethereum_Two Color.svg`}
            />
            <Typography variant="body1" gutterBottom align="center">
              Page introuvable
            </Typography>
            <Button
              href={"/"}
              sx={{ m: 1 }}
              size="medium"
              color="secondary"
              variant="contained"
            >
              Accueil
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default NotFound;
