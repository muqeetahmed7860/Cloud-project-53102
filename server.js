const express = require("express");
const os = require("os");

const app = express();

let counter = 0;

app.get("/", (req, res) => {
    counter++;

    res.send(`
        <h1>Cloud Computing Project</h1>
        <p>Timestamp: ${new Date()}</p>
        <p>Container ID: ${os.hostname()}</p>
        <p>Visitor Counter: ${counter}</p>
    `);
});

app.get("/health", (req, res) => {
    res.send("App is healthy");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});