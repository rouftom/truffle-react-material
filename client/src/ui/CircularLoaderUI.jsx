import React from "react";
import { AppTheme } from "../lib/theme";
import {
  Grid, Box,
  Typography,
  createTheme,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";

function CircularLoaderUI() {
  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <Box sx={{ pt: 15, flexGrow: 1 }}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography component="div" align="center">
              <CircularProgress color="primary" variant="indeterminate" />
              <Typography variant="body2">Loading...</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CircularLoaderUI;
