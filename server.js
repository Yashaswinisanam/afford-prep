const express=require ('express');
const app=express();
app.use(express.json());
// Step 1: In-memory "Database" (Array)
let students = [
  { id: 1, name: "Aditi", age: 20, course: "CSE" },
  { id: 2, name: "Rahul", age: 22, course: "ECE" }
];

app.get('/students', (req, res) => {
  res.status(200).json(students);
});

// Step 3: GET /students/:id (Only one student by ID)
app.get('/students/:id', (req, res) => {
  //from req.params.id string is returned, so we need to convert it to a number
  const studentId = Number(req.params.id);
  
  // in array check if student exists with the given ID
  const student = students.find(s => s.id === studentId);

  if (student) {
    // If student exists, return 200 success status with the student data
    res.status(200).json(student);
  } else {
    // If student not found, return 404 status with an error message
    res.status(404).json({ error: "Student not found!" });
  }
});
app.get('/',(req,res)=>{
    res.json({message:'server is listening '});
});
app.get("/about", (req, res) => {
  res.json({
    author: "Yashaswini",
    role: "Full Stack Developer Candidate"
  });
});
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime()
  });
});
app.post('/students', (req, res) => {
  const { name, age, course } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required!" });
  }

  const maxId = students.length > 0 ? Math.max(...students.map(s => s.id)) : 0;
  const newStudent = { id: maxId + 1, name, age, course };

  students.push(newStudent);
  res.status(201).json(newStudent);
});
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});