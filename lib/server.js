const express = require("express");
const StudentController = require("./controller/StudentsController");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome");
});

app.get("/v1/students", (req, res) => {
    res.status(200).send(StudentController.studentFullFields());
});

app.get("/students/emails", (req, res) => {
    res.status(200).send(StudentController.studentCertificationField());
});

app.get("/students/credits", (req, res) => {
    res.status(200).send(StudentController.studentCredits());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
