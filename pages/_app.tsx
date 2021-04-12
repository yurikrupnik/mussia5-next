import { AppProps } from "next/app";
import React from "react";
import { Provider } from "next-auth/client";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Header from "@/components/Header";
import { UserProvider } from "@auth0/nextjs-auth0";
import theme from "../src/theme";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const { user } = pageProps;
    console.log("useruser", user);
    return (
        <>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <UserProvider user={user}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {/*<header>jeader jere</header>*/}
                    {/*<Header />*/}
                    {/* eslint-disable-next-line */}
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserProvider>
        </>
    );
};

export default MyApp;
