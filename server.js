const express=require ('express');
const app=express();
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
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});