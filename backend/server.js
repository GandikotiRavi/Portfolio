
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());

const projects=[
 {id:1,title:'Portfolio Website'},
 {id:2,title:'CI/CD Dashboard'}
];

app.get('/api/projects',(req,res)=>res.json(projects));

app.listen(5000,()=>console.log('Server running on port 5000'));
