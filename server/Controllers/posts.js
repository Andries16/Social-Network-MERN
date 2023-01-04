
import postMessage from "../Models/PostMessage.js";

export const  getPosts = async (req,res)=>{
    try {
        const PostMessages = await postMessage.find();
        res.status(200).json(PostMessages);
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
}

export const  createPosts = async (req,res)=>{
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error){
        res.status(409).json({message: error.message})
    }
}