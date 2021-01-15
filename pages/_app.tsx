import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6c7bd0",
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    console.log("pageProps", pageProps);
    // return React.createElement(Component, pageProps);
    return (
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    );
};

export default MyApp;
