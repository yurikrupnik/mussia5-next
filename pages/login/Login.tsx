import React, { useState } from "react";
// import axios from "axios";
// import Head from "next/head";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
// import nc from "next-connect";
// import db from "../../middlewares/db";
// import UsersModel from "../api/users/model";
// import { useCurrentUser } from "@/hooks/index";

// const getData = () => {
//     return axios.get("/api/users");
// };

const LoginPage = () => {
    // console.log("props", props);
    const router = useRouter();
    console.log("router", router);
    const [errorMsg] = useState("");
    // const [user, { mutate }] = useCurrentUser();
    // useEffect(() => {
    // redirect to home if user is authenticated
    // if (user) router.push("/");
    // }, [user]);

    async function onSubmit() {
        // e.preventDefault();
        // const body = {
        //     email: e.currentTarget.email.value,
        //     password: e.currentTarget.password.value,
        // };
        // const res = await fetch("/api/auth", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(body),
        // });
        // if (res.status === 200) {
        //     const userObj = await res.json();
        //     // mutate(userObj);
        // } else {
        //     setErrorMsg("Incorrect username or password. Try again!");
        // }
    }

    return (
        <Container>
            {/*<Head>*/}
            {/*    <title>Sign in</title>*/}
            {/*</Head>*/}
            <Button color="primary">Aros</Button>
            <h2>Sign in</h2>
            <form onSubmit={onSubmit}>
                {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
                <label htmlFor="email">
                    <input id="email" type="email" name="email" placeholder="Email address" />
                </label>
                <label htmlFor="password">
                    <input id="password" type="password" name="password" placeholder="Password" />
                </label>
                <Button type="submit">Sign in</Button>
                <Link href="/forget-password">
                    <a>Forget password</a>
                </Link>
            </form>
        </Container>
    );
};

// export async function getServerSideProps(ctx) {
//     console.log("ctx", ctx);
//     const d = await getData();
//     return { props: { users: d } };
//     // const handler = nc();
//     // handler.use(db);
//     // await handler.run(ctx.req, ctx.res);
//     //
//     // const { token } = ctx.query;
//     //
//     // const deletedToken = await findAndDeleteTokenByIdAndType(ctx.req.db, token, "emailVerify");
//     //
//     // if (!deletedToken) return { props: { success: false } };
//     //
//     // await updateUserById(ctx.req.db, deletedToken.creatorId, { emailVerified: true });
//     //
//     // return { props: { success: true } };
// }

export default LoginPage;
