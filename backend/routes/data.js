const express = require("express");

const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will create some data.
recordRoutes.route("/record/add").post(async (req, res) => {
    /// console.log(req);
    try {
        let db_connect = dbo.getDb();
        let myobj = {
            last: req.body.last,
            first: req.body.first,
        };
        const result = await db_connect.collection("records").insertOne(myobj);
        res.json(result);
    } catch (err) {
        throw err;
    }
});

// This section will get a list of all the records.
recordRoutes.route("/record").get(async (req, res) => {
    try {
        console.log("In record get route");
        let db_connect = dbo.getDb("employees");
        const result = await db_connect.collection("records").find({}).toArray();
        console.log("got result");
        res.json(result);
    }
    catch (err) {
        throw err;
    }
});