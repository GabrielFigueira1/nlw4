import express, { response } from 'express';

const app = express();

app.get("/users", (req, res) => {
    res.send('<a>Some users<a/>');
});
app.get("/", (req, res) => {
    res.send("<a>Servers is runnig</a>");
});
app.post("/save", (req, res) => {
    return response.json({message: "Sucess!"});
});

app.listen(3333, ()=> console.log("Running!"));
