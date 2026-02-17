import express from 'express'
import { connectMongo } from '../DB/connect.js'
import { createToken, tokenExtractor } from '../utils/jwt.js'

 const apiRouter = express();

 export const db = await connectMongo({
    uri: process.env.URI,
    dbName: process.env.DBNAME
});


apiRouter.post('/complaints', async (req, res) => {
    const { category, message } = req.body;
    const date = new Date().toLocaleDateString()
    const result = await db .collection('messages').insertOne({
            category, 
            message,
            createdAt: date
        })
        res.status(201).json({message: "The save was successful.",
             obj : {
                category,
                message,
                createdAt: date
                }
            }
        )
    }
);


apiRouter.post('/admin/login', async (req,res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD){
        const token = createToken({password})
         return res.status(200).json({message: 'Verification was successful', 
            token
        })
    }
    return res.status(401).json({error: "Unauthorized"})
});


apiRouter.get('/complaints', tokenExtractor, async (req,res) => {
    try{ 
    const data = await db.collection('messages').find({}).sort({"createdAt" : -1}).toArray()
        console.log(data);
    return res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
})


 export default apiRouter