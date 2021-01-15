import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6c7bd0",
        },
    },
});

const theme1 = createMuiTheme({
    palette: {
        primary: {
            main: "#8ad06c",
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    // console.log("pageProps", pageProps);
    // console.log("Component", Component);
    // return React.createElement(Component, pageProps);
    const router = useRouter();
    console.log("router", router);
    return (
        <ThemeProvider theme={router.pathname === "/dashboard" ? theme1 : theme}>
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
