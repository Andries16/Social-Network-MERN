import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit: "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors());
app.use('/posts',postRoutes)

const CONNECTION_URL = "mongodb+srv://and:and2004@cluster0.nyn9ogh.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`server running ${PORT}`)))
    .catch((error) => console.log(error.message));
