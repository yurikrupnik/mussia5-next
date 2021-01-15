import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#8ad06c",
        },
    },
});

const Dashbord = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h2">Dashboard</Typography>
            <Button color="primary">Aros</Button>
        </ThemeProvider>
    );
};

Dashbord.propTypes = {};

export default Dashbord;
