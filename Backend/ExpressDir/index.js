import express from "express";
const app = express();

let code = "<h1>Hemraj Suryawanshi</h1> <P>I am recentely graduated with 2025 batch without educational gaps. Currently I am learning Backend tools to understand the things happens in backend the logic behind th things, and i'm also learning java and learning DSA learning diffrent types of algorithm implementing the logic of algorithms to solve problems. </P>"

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use("/root", (req, res) => {
//     res.send("you contacted root path");
// });

// app.use("/login", (req, res) => {
//     res.send(`<input type="email" placeholder="Enter Email"> <input type="password" placeholder="Enter Password"> `);
// });

app.get("/", (req, res) => {
    res.send("Hello im root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(req.params);


    res.send(`welcome to rhe page of @${username}`);
});

app.get("/search", (req, res) => {
    let q = req.query;
    if (!q) {
        res.send("<h1>Nothing Searched</h1>");
    }
    else {
        console.log(req.query);
    }
});
// app.use((req, res) => {
//     console.log("request received");
//     res.send(code);
// });