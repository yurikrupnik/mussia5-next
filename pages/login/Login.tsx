import React, { useCallback, useState } from "react";
import { Formik, Form } from "formik";
// import { useToggle } from "react-use";
import { useSession, signin, signOut } from "next-auth/client";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// todo check
// import { Context as Auth } from "../../api/auth/context";
import Divider from "@material-ui/core/Divider";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
// import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
// import Checkbox from "@material-ui/core/Checkbox";
import Hidden from "@material-ui/core/Hidden";

// import { useHistory } from "react-router";
// import RenderInput from "../../components/uiComponents/RenderInput";
// import DialogPasswordInfo from "../../components/uiComponents/DialogPasswordInfo";
import { useRouter } from "next/router";
// import TextField from "@/components/FormField"; // todo fix eslint
import useSWR from "swr";
import TextField from "../../components/FormField";
import fetcher from "../../src/fetch";
// import { Context as Projects } from "../../api/projects/context";
// import { validateEmail } from "../../utils/validation";
// import loginStyles from "./LoginStyles";
// import SpinnerPlatform from "../../components/uiComponents/SpinnerPlatform";
// import { Context as Onboarding } from "../../api/onboarding/context";
// import { Context as LanguagesTypes } from "../../api/languages/context";
// import { Context as Currencies } from "../../api/currencies/context";

const logo = "";
const logoBlack = "";
const Login = () => {
    const [session] = useSession();
    console.log("session", session);
    // console.log("loading", loading);

    const { data, mutate } = useSWR("/api/users", fetcher);
    console.log("{ data, mutate }", { data, mutate }); // eslint-disable-line
    // const classes = loginStyles();
    // const [shouldRender, setShouldRender] = useState(false);
    const router = useRouter();

    // const [open, toggleOpen] = useToggle(false);
    // const [openInfo, toggleOpenInfo] = useToggle(false);
    // const languages = useContext(LanguagesTypes);
    // const currencies = useContext(Currencies);
    // const onboarding = useContext(Onboarding);
    // const auth = useContext(Auth);
    // const projects = useContext(Projects);
    const [loginError] = useState("");
    const [loading] = useState(false);

    const register = useCallback(() => {
        router.push("/onboarding/step1");
    }, [router]);

    return (
        <Grid container item xs={12} direction="row" justify="center" alignItems="center">
            {/*{openInfo && <DialogPasswordInfo open={openInfo} data={infoDialogData} toggleOpen={toggleOpenInfo} />}*/}

            {/*{open && (*/}
            {/*    <DialogPasswordInfo*/}
            {/*        open={open}*/}
            {/*        data={{*/}
            {/*            title: "Reset Password",*/}
            {/*            contentText: "Enter the email address associated with your Roundtrip account.",*/}
            {/*            link: "",*/}
            {/*            image: "",*/}
            {/*            form: {*/}
            {/*                email,*/}
            {/*                handleEmail,*/}
            {/*                handleReset,*/}
            {/*                buttonText: "Email me recovery link",*/}
            {/*            },*/}
            {/*        }}*/}
            {/*        toggleOpen={toggleOpen}*/}
            {/*    />*/}
            {/*)}*/}
            <Grid item xs={12}>
                <Hidden smDown>
                    <img src={logo} alt="logo" />
                </Hidden>
                <Hidden mdUp>
                    <img src={logoBlack} alt="logo" />
                </Hidden>
            </Grid>
            <Grid container item sm={10} xs={12} direction="row" justify="center" alignItems="center">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        rememberMe: false,
                    }}
                    // validate={(values) => {
                    //     const passLength = 2;
                    //     const errors = {};
                    //     if (!values.email) {
                    //         errors.email = "Email is required";
                    //     } else if (!validateEmail(values.email)) {
                    //         errors.email = "Not valid email";
                    //     }
                    //     if (!values.password) {
                    //         errors.password = "Password is required";
                    //     } else if (values.password.length < passLength) {
                    //         errors.password = `Is too short, should be ${passLength} chars minimum.`;
                    //     }
                    //     return errors;
                    // }}
                    onSubmit={(values) => {
                        // console.log ("values", values);
                        // setLoading(true);
                        fetch("/api/auth", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(values),
                        }).then(() => {
                            // console.log("r", r);
                            router.push("/dashboard");
                        });
                        // auth.login({
                        //     email: values.email,
                        //     password: values.password,
                        //     rememberMe: values.rememberMe,
                        // })
                        //     .then((user) => {
                        //         console.log("user", user);
                        //         // auth.localStore.setItem("rememberMe", user.token);
                        //         setLoading(false);
                        //     })
                        //     .catch((err) => {
                        //         // eslint-disable-next-line no-console
                        //         console.log("err", err);
                        //         setLoading(false);
                        //         setLoginError("Your email or password is incorrect. Double check and try again.");
                        //     });
                    }}
                >
                    {(formikProps) => {
                        const { isValid } = formikProps;
                        return (
                            <Grid
                                container
                                item
                                lg={4}
                                md={6}
                                sm={8}
                                xs={12}
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Form>
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        // className={classes.loginContainerWrapper}
                                    >
                                        <Grid item xs={12}>
                                            <Typography
                                                // className={classes.dividerMargin}
                                                variant="h6"
                                                onClick={() => {
                                                    signOut();
                                                    // fetch("/api/auth", {
                                                    //     method: "DELETE",
                                                    //     headers: { "Content-Type": "application/json" },
                                                    //     // body: JSON.stringify(values),
                                                    // }).then((r) => {
                                                    //     console.log("r", r);
                                                    // });
                                                }}
                                                align="center"
                                            >
                                                Welcome
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" align="center">
                                                Build The Commercial Travel Website of Your Dreams
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {loginError && (
                                                <Typography variant="body2" align="center">
                                                    {loginError}
                                                </Typography>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                size="large"
                                                color="secondary"
                                                variant="contained"
                                                onClick={register}
                                                data-testid="login_register"
                                            >
                                                Register
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction="row" justify="center" alignItems="center">
                                                <Grid item xs={5}>
                                                    <Divider orientation="horizontal" variant="fullWidth" />
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography variant="body1" align="center">
                                                        OR
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Divider orientation="horizontal" variant="fullWidth" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                name="email"
                                                label="Email"
                                                // component={TextField}
                                                // endAdornment={
                                                //     <InputAdornment>
                                                //         <MailOutlineIcon />
                                                //     </InputAdornment>
                                                // }
                                                disabled={loading}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                type="password"
                                                name="password"
                                                label="Password"
                                                // component={TextField}
                                                // endAdornment={
                                                //     <InputAdornment>
                                                //         <VpnKeyIcon />
                                                //     </InputAdornment>
                                                // }
                                                disabled={loading}
                                            />
                                        </Grid>
                                        <Grid item container xs={12} alignItems="center">
                                            {/*<Grid item sm={6} xs={12}>*/}
                                            {/*    <FormControlLabel*/}
                                            {/*        label="Remember me"*/}
                                            {/*        control={*/}
                                            {/*            <Checkbox*/}
                                            {/*                onChange={formikProps.handleChange}*/}
                                            {/*                name="rememberMe"*/}
                                            {/*                color="primary"*/}
                                            {/*                icon={<CircleUnchecked />}*/}
                                            {/*                checkedIcon={<CircleCheckedFilled />}*/}
                                            {/*                disabled={loading}*/}
                                            {/*            />*/}
                                            {/*        }*/}
                                            {/*    />*/}
                                            {/*</Grid>*/}
                                            <Grid
                                                item
                                                sm={6}
                                                xs={12}
                                                container
                                                justify="flex-end"
                                                // className={classes.forgotPasswordWrapper}
                                            >
                                                <Button
                                                    // onClick={toggleOpen}
                                                    // className={classes.forgotPass}
                                                    disabled={loading}
                                                >
                                                    Forgot Password
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                // className={`${classes.loginButton} ${classes.buttonMargin}`}
                                                type="submit"
                                                disabled={!isValid}
                                            >
                                                Login
                                            </Button>
                                            {/*<Grid container className={classes.wrapperSpinner}>*/}
                                            {/*    {loading && <SpinnerPlatform />}*/}
                                            {/*</Grid>*/}
                                        </Grid>
                                        <Button onClick={() => signin("google")}>signin google</Button>
                                        <a href="/api/auth/google">
                                            <Button>Google</Button>
                                        </a>
                                        <a href="/auth/bitbucket">
                                            <Button>bitbucket</Button>
                                        </a>
                                    </Grid>
                                </Form>
                            </Grid>
                        );
                    }}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default Login;
