import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth({
    // async login(req, res) {
    //     try {
    //         // Add your own custom logger
    //         // myCustomLogger("Logging in");
    //         // Pass custom parameters to login
    //         console.log("res", req);
    //         awai t handleLogin(req, res, {
    //             authorizationParams: {
    //                 custom_param: "custom",
    //             },
    //             returnTo: "/custom-page",
    //         });
    //     } catch (error) {
    //         // Add your own custom error handling
    //         // myCustomErrorReporter(error);
    //         res.status(error.status || 400).end(error.message);
    //     }
    // },
});
