import express from "express";
import data from "./data";
let port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/accounts", (req, res) => {
    res.send(data);
})

app.get("/accounts/:account", (req, res) => {
    const accountName = req.params.account;
    res.send(data.find(account => account[0] == accountName));
})

app.listen(port, () => {
    console.log(`App listening on Port: http://localhost:${port}`);
})