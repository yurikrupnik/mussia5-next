import React from "react";
// import startCase from "lodash/startCase";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { NextPageContext } from "next";

// mock data - change to real api requests
// import airCompressor from "../../../charts/air-compressor.json";
// import ambientConditions from "../../../charts/ambient-conditions.json";
// import compressedAir from "../../../charts/compressed-air.json";
// import production from "../../../charts/production.json";
// import weather from "../../../charts/weather.json";
// import resources from "../../../charts/resources.json";
// import silo from "../../../charts/silo.json";
// import machine from "../../../charts/machine.json";
// import energySource from "../../../charts/energy-source.json";
// import electricityMain from "../../../charts/electricity-main.json";

// const mockData = {
//     "air-compressor": airCompressor,
//     production,
//     "ambient-conditions": ambientConditions,
//     "compressed-air": compressedAir,
//     weather,
//     resources,
//     silo,
//     machine,
//     "energy-sources": energySource,
//     "electricity-main": electricityMain,
// };

// interface Props {
//     // options?: any;
// }

const Id = () => {
    // const { options } = props;
    const ad = "ad";
    return (
        <div>
            <div>{ad}</div>
        </div>
    );
};

// eslint-disable-next-line
export async function getServerSideProps(ctx: NextPageContext) {
    // todo fetch the real item using id
    // const { id } = ctx.query;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const options = { ...mockData[id], title: { text: startCase(id) } };

    return { props: {} };
}

export default Id;
