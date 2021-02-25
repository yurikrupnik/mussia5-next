import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Document } from "mongoose";

const responseId = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const statusCode = 202;
    return () => res.status(statusCode).json(id);
};

const handleError = (res: NextApiResponse) => {
    const statusCode = 500;
    return (err: Error) => res.status(statusCode).send(err);
};

function respondWithResult<T>(res: NextApiResponse) {
    return (entity: T) => {
        if (!entity) {
            console.log("null entitiy fix error", entity); // eslint-disable-line
            // res.statusCode = 404;
            // res.statusMessage = "aris";
            // res.end();
            res.status(200).json(null);
        } else {
            // console.log(entity);
            res.status(200).json(entity);
        }
    };
}

const list = <T extends mongoose.Model<Document>>(Model: T) => (req: NextApiRequest, res: NextApiResponse) => {
    Model.find(req.query).then(respondWithResult(res)).catch(handleError(res));
};

// changed from express params to query - next way for dynamic routes
const find = (Model: mongoose.Model<Document>) => (req: NextApiRequest, res: NextApiResponse) => {
    Model.findOne({ _id: req.query.id }).then(respondWithResult(res)).catch(handleError(res));
};

const removeOne = (Model: mongoose.Model<Document>) => (req: NextApiRequest, res: NextApiResponse) =>
    Model.findByIdAndDelete(req.query.id).then(responseId(req, res)).catch(handleError(res));

const create = (Model: mongoose.Model<Document>) => (req: NextApiRequest, res: NextApiResponse) =>
    Model.create(req.body).then(respondWithResult(res)).catch(handleError(res));

const update = (Model: mongoose.Model<Document>) => (req: NextApiRequest, res: NextApiResponse) =>
    Model.findOneAndUpdate(
        {
            _id: req.body._id, // eslint-disable-line no-underscore-dangle
        },
        req.body,
        {
            new: true,
            useFindAndModify: false,
        }
    )
        .then(respondWithResult(res))
        .catch(handleError(res));

export { list, find, update, create, removeOne, respondWithResult, handleError };
