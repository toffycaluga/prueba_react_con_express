import express from "express";


const port = 5000;

const app = express();

app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userOne"] })
})


app.listen(port, () => { console.log("server started on port 5000") })