import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
// import { useRouter } from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
// import theme1 from "../src/themes1";

// eslint-disable-next-line
const MyApp = ({ Component, pageProps }: AppProps) => {
    // const router = useRouter();
    // React.useEffect(() => {
    //     // Remove the server-side injected CSS.
    //     const jssStyles = document.querySelector("#jss-server-side");
    //     if (jssStyles) {
    //         jssStyles.parentElement.removeChild(jssStyles);
    //     }
    // }, []);
    return (
        <>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* eslint-disable-next-line */}
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
