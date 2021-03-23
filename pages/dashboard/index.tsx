import React, { useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { NextPageContext } from "next";

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
    const res = await fetch(`http://localhost:3000/api/users`);
    const data = await res.json();

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
