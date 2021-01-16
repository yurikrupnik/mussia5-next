import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <header>jeader jere</header>
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

export default MyApp;
