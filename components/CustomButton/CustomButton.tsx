import React from "react";
// import styles from "./CustomButton.module.scss";

interface Props {
    text?: string;
}

const CustomButton = (props: Props) => {
    const { text } = props;
    return <button type="button">{text}</button>;
};

CustomButton.defaultProps = {
    text: "send",
};

export default CustomButton;
