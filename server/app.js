import express from "express";
import cors from 'cors'
import 'dotenv/config'
import apiRouter from './routers/api.js'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT 

app.use('/api', apiRouter)

app.get('/', (req,res) => {
    res.send("hello from router")
    console.log("hello from router");
    console.log(process.env.URI);
    
})


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})