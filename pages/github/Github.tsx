import React, { useEffect } from "react";
import { useSession } from "next-auth/client";
import request from "axios";

const Github = () => {
    const [session] = useSession();
    console.log("session -2", session); // eslint-disable-line
    useEffect(() => {
        request.get("https://api.github.com/user", {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `token ${token here}`, todo
            },
        });
        // fetch({
        //     method: "GET",
        //     url: "https://api.github.com/user",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `token 0ddfe0e7775e8153f98e6ad75b6777750ae5895a`,
        //     },
        // });
    }, []);
    return <div>Github</div>;
};

export default Github;
