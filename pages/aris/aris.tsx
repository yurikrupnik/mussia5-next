import React, { useState } from "react";
import classes from "./aris.module.scss";

const Aris: React.FC = () => {
    const [yes] = useState(false);
    return <div className={classes.root}>Aris and more {yes.toString()}</div>;
};

export default Aris;
