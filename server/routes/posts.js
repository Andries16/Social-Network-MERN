import express from "express";
import {getPosts, createPosts} from "../Controllers/posts.js"

const router = express.Router();

router.get('/', getPosts)
router.post('/', getPosts)
export default router;