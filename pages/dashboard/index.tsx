import React from "react";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import { NextPageContext } from "next";
// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: "#8ad06c",
//         },
//     },
// });

const createClasses = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        // boxSizing: "border-box",
        padding: "150px 40px",
        [theme.breakpoints.down("sm")]: {
            padding: "40px 20px",
            boxShadow: "none",
        },
    },
    // fullSize: {
    //     width: "100%",
    //     height: "100%",
    // },
    // imgContainer: {
    //     maxHeight: "100vw",
    //     [theme.breakpoints.down("sm")]: {
    //         height: "60%",
    //     },
    // },
    // img: {
    //     backgroundSize: "contain",
    // },
    // texts: {
    //     marginLeft: "-60px",
    //     [theme.breakpoints.down("sm")]: {
    //         marginLeft: "30px",
    //     },
    // },
    // title: {
    //     fontWeight: 600,
    //     fontSize: "30px",
    //     [theme.breakpoints.down("xs")]: {
    //         fontSize: "22px",
    //     },
    // },
    // subtitle: {
    //     color: theme.palette.text.secondary,
    //     margin: "15px 0 30px 0",
    //     maxWidth: "500px",
    //     fontSize: "20px",
    //     [theme.breakpoints.down("xs")]: {
    //         fontSize: "16px",
    //     },
    // },
    // button: {
    //     color: theme.palette.common.white,
    //     backgroundColor: theme.palette.info.main,
    //     "&:hover": {
    //         backgroundColor: theme.palette.info.dark,
    //     },
    //     fontSize: "18px",
    //     padding: "27px",
    //     [theme.breakpoints.down("xs")]: {
    //         fontSize: "14px",
    //         padding: "22px",
    //     },
    // },
}));
// eslint-disable-next-line
const Dashbord = () => {
    const styles = createClasses();
    return (
        <Grid classes={{ root: styles.root }}>
            <Typography variant="h2">Dashboard</Typography>
            <Button color="primary">Aros</Button>
        </Grid>
    );
};

// Dashbord.getServerSideProps = (ctx: NextPageContext) => {
//     console.log("getServerSideProps ctx", ctx.req?.headers);
//     // console.log("ctx", ctx);
//     return { props: {} };
// };

Dashbord.getInitialProps = (ctx: NextPageContext) => {
    console.log("getInitialProps ctx", ctx.req?.headers);
    // console.log("ctx", ctx);
    return { props: {} };
};

// Dashbord.getStaticProps = (ctx: NextPageContext) => {
//     console.log("getStaticProps ctx", ctx.req?.headers);
//     // console.log("ctx", ctx);
//     return { props: {} };
// };

Dashbord.propTypes = {};

export default Dashbord;
