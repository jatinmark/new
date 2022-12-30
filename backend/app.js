import  express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import  "./data.js";





const app = express()
app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:GhtjmsfktXYLwxx2@cluster0.qbnwa0k.mongodb.net/blogDB?retryWrites=true&w=majority')

const db = mongoose.connection;


const userschema =  mongoose.Schema({
    id : Number ,
    title : String ,
    subtitle: String,
    category : String,
    img : String ,
    description : String,
    published : String,
    author : {
        name : String,
        img : String,
        designation : String
    }
    

});

const blog = mongoose.model('Blog',userschema);

db.once('open',() => {
   


app.get('/',(req,res) => res.send("hello"));

app.get('/data' , (req,res)=>{
 let messages =  blog.find({},(err,blogs)=>{
  if(err){
    res.send(err);
  }
  return res.status(200).json(blogs);
 }) ;  
    
  });


app.post('/user' , (req,res)=>{
   const dbmessage = req.body
   blog.create(dbmessage,(err,data) =>{
     if(err){
       res.send(err);
     }else {
      
       res.send(data);
     }
   })
});

console.log("db is connected");

});

app.listen(process.env.PORT || 4000, function() {
    console.log("Server started successfully");
  });