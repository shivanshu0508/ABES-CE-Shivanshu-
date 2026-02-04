const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send("this is my first server");
});

app.get('/api/about', (req, res) => {
    const students = [
        {
            id: 1,
            name: "shivanshu",
            class: "10",
            img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 2,
            name: "sahil",
            class: "10",
            img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 3,
            name: "sauram",
            class: "10",
            img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 4,
            name: "sahil",
            class: "10",
            img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 5,
            name: "sauram",
            class: "10",
            img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?semt=ais_hybrid&w=740&q=80"
        }
    ];

    res.json(students);
});

app.get('/Contact', (req, res) => {
    res.send("<h1>Contact: 8957492231</h1>");
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
