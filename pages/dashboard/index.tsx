import React, { useCallback, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { NextPageContext } from "next";
import axios from "axios";

interface Data {
    name: string;
    email: string;
    image: string;
    _id: string;
}

interface Props {
    data: Data[];
}

interface ItemProps {
    item: Data;
}

const Row = (props: ItemProps) => {
    const { item } = props;
    // const router = useRouter();

    const handleClick = useCallback(() => {
        // router.push(`/dashboard/analytics/${kebabCase(item.type.name)}`);
    }, [item]);

    return (
        <Grid onClick={handleClick} container style={{ cursor: "pointer" }}>
            <Grid item xs={4}>
                <Typography variant="caption">Type: {item.name}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Name: {item.email}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Site: {item.image}
                </Typography>
            </Grid>
        </Grid>
    );
};

const Item = (props: ItemProps) => {
    const { item } = props;

    return (
        <Paper key={item._id} style={{ marginBottom: "10px" }}>
            <Grid style={{ padding: "15px" }} container>
                <Row item={item} />
            </Grid>
        </Paper>
    );
};

const List = (props: Props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item) => (
                <Item key={item._id} item={item} />
            ))}
        </div>
    );
};

const Dashboard = (props: Props) => {
    useEffect(() => {
        axios.get(`/api/hello`).then((r) => {
            console.log("r", r);
        });
        // fetch(`http://localhost:3000/api/hello`).then((a) => a.json());
    });
    const { data } = props;
    return (
        <Container>
            <Typography align="center" variant="h5">
                Dashboard
            </Typography>
            <h2>Users</h2>
            <List data={data} />
        </Container>
    );
};

// eslint-disable-next-line
export async function getServerSideProps(ctx: NextPageContext) {
    // console.log("ctx", ctx.request);
    console.log("RESTURL_SPEAKERS", process.env.RESTURL_SPEAKERS);
    console.log("procc", process.env.hostname);
    console.log("NODE_ENV", process.env.NODE_ENV);
    console.log("procc", process.env.HOSTNAME);

    let host = "localhost:3000";
    if (ctx.req) {
        host = ctx.req.headers.host ? ctx.req.headers.host : "";
        // console.log("ctx.req.headers.host", ctx.req.headers.host);
    }
    const http = host.includes("localhost") ? "http" : "https";

    const url = `${http}://${host}/api/users`;
    console.log({ url });
    const data = await axios.get(url).then((users) => {
        console.log("users", users.data);
        return users.data;
    });
    // const res = await axios.get(`/api/users`);
    // const data = await res.json();
    // const data = [];
    // console.log("data", res.data.length);
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
}

Dashboard.propTypes = {};

export default Dashboard;
