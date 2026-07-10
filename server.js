const express=require ('express');
const app=express();
app.use(express.json());
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
  console.log(req.body);
  res.json({ received: req.body });
});
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});