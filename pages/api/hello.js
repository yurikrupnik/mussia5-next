// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import morgan from "morgan";
import connectDb from "../../middlewares/db";

// connectDb();
function onError(err, req, res, next) {
    // console.log(err); // eslint disable-line

    res.status(500).end(err.toString());
    // OR: you may want to continue
    next();
}

function onNoMatch(req, res) {
    // console.log("req", req); // eslint disable-line
    res.status(404).end("page is not found... or is it");
}

// todo eslint did not catch this = DeepScan did
// https://deepscan.io/dashboard/#view=project&tid=12695&pid=15729&bid=318942&prid=&subview=issues&status=%5B%22open%22%2C%22confirmed%22%5D&page=1&impact=%5B%22High%22%2C%22Medium%22%2C%22Low%22%5D

// handler.use((req, res, next) => {
//   req.hello = "world";
//   // call next if you want to proceed to next in chain
//   next();
// });
// // Or include a base
// handler.use("/foo", fn); // Only run in /foo/**

// Mount an instance of next-connect
// const common = nc().use(midd1).use(midd2); // You may have some common middleware to be used in every route.
// const auth = nc().use("/dashboard", checkAuth);
const subapp = nc()
    .get((req, res) => {
        res.statusCode = 200;
        res.send("add");
    })
    .get("/baz", onNoMatch);

const handler = nc({ onError, onNoMatch }).use(morgan("dev")).use(connectDb);

handler
    // .use(common) // `midd1` and `midd2` runs everywhere
    // .use(auth) // `checkAuth` runs on /dashboard/*
    .use("/foo", subapp); // `getHandle` runs on /foo while `postHandle` runs on /foo/baz

const base = nc({ onError, onNoMatch })
    .use(morgan("dev"))
    .use(connectDb)
    .get((req, res) => {
        // res.statusCode(200)
        res.send("aris");
    });

// base.get("/base", (req, res) => {
//   // res.statusCode(200)
//   res.send("aris");
// });
// .get((req, res) => {
//   res.statusCode = 200;
//   res.json({ name: "John Doe" });
// });

// handler.use(morgan("dev"));
// handler.use(connectDb);

handler.get((req, res) => {
    res.statusCode = 200;
    res.json({ name: "Arisss" });
});

handler.get("/a", base);

handler.use("/base", (req, res) => {
    res.statusCode = 200;
    res.json({ name: "base" });
    // res.statusCode(200).send("ok base");
});

handler.post((req, res) => {
    res.statusCode = 200;
    res.json({ name: "posting" });
});

export default handler;
