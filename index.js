const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//data
const Students = [
  {
    id: 1,
    name: "Chinara",
    surname: "Aghazada",
    faculty: "TRK",
    GPA: 88

  },
  {
    id: 2,
    name: "Aytan",
    surname: "Huseynzada",
    faculty: "TRK",
    GPA: 88

  }

];



app.get("/api", (req, res) => {
  res.send("Welcome to Our API!");
});



// get All
app.get("/api/students", (req, res) => {
  const { name } = req.query;
  if (name === undefined) {
    res.status(200).send({
      data: STUDENTS,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: STUDENTS.filter(
        (x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      ),
      message: "data get success!",
    });
  }
});
// get  by ID
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const student = STUDENTS.find((x) => x.id === parseInt(id));
  if (!student) {
    console.log("test");
    res.status(204).send(" not found!");
    // return;
  } else {
    res.status(200).send({
      data: student,
      message: "data get success!",
    });
    // return;
  }
});
// delete by ID
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const students = STUDENTS.find((x) => x.id == id);
  if (student === undefined) {
    res.status(404).send(" not found");
  } else {
    const idx = STUDENTS.indexOf(student);
    STUDENTS.splice(idx, 1);
    res.status(203).send({
      data: student,
      message: " deleted successfully",
    });
  }
});
post
app.post("/api/students", (req, res) => {
  const { name, surname, faculty, GPA } = req.body;
  const newSTUDENT = {
    id: crypto.randomUUID(),
    name: name,
    surname: surname,
    faculty: faculty,
    GPA: GPA
  };
  STUDENTS.push(newStudent);
  res.status(201).send("created");
});
put
app.put("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const { name, surname, faculty, GPA } = req.body;
  const existedStudent= STUDENTS.find((x) => x.id == id);
  if (existedStudent== undefined) {
    res.status(404).send(" not found!");
  } else {
    if (name) {
      existedStudent.name = name;
    }
    if (surname) {
      existedStudent.surname = surname;
    }
    if (faculty) {
      existedStudent.faculty = faculty;
    }
    if (GPA) {
      existedStudent.GPA = GPA;
    }
    res.status(200).send(`student: ${existedStudent.name}`);
  }
});

PORT = "3000";
app.listen(PORT, () => {
  console.log(`NODE APP listening on port ${PORT}`);
});
