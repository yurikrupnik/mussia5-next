import React, { useCallback } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { NextPageContext } from "next";
// import kebabCase from "lodash/kebabCase";
// import { useRouter } from "next/router";
// import json from "../../systems.json";

interface Data {
    name: string;
    site: {
        name: string;
    };
    type: {
        name: string;
    };
    id: string;
    children: Data[] | null;
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
                <Typography variant="caption">Type: {item.type.name}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Name: {item.name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="caption" color="textSecondary">
                    Site: {item.site.name}
                </Typography>
            </Grid>
        </Grid>
    );
};

const Item = (props: ItemProps) => {
    const { item } = props;

    return (
        <Paper key={item.id} style={{ marginBottom: "10px" }}>
            <Grid style={{ padding: "15px" }} container>
                <Row item={item} />
                <br />
                <Grid item xs={12}>
                    {Array.isArray(item.children) &&
                        item.children.map((child) => (
                            <Paper key={child.id} style={{ margin: "5px", padding: "15px" }}>
                                <Row item={child as Data} />
                                {Array.isArray(child.children) && child.children.length ? (
                                    <List key={child.id} data={child.children} />
                                ) : null}
                            </Paper>
                        ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

const List = (props: Props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item) => (
                <Item key={item.id} item={item} />
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
            <List data={data} />
        </Container>
    );
};

// eslint-disable-next-line
export async function getStaticProps(ctx: NextPageContext) {
    // todo fetch the data async with fetch and set in to the props
    // const formattedData = json.data.map((v) => {
    //     const { name, type, site, children, id } = v;
    //     return {
    //         name,
    //         type,
    //         site,
    //         children: Array.isArray(children)
    //             ? children.map((item) => ({
    //                   id: item.id,
    //                   type: item.type,
    //                   site: item.site,
    //                   children: item.children || [],
    //                   name: item.name,
    //               }))
    //             : [],
    //         id,
    //     };
    // });
    return { props: { data: [] } };
}

Dashboard.propTypes = {};

export default Dashboard;
