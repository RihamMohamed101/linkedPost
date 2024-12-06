import { Router } from "express";
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "./posts.controller.js";

const postRouter = Router();

postRouter.post('/', addPost)
postRouter.get('/', getAllPosts)
postRouter.get('/:id', getSinglePost)
postRouter.put('/:id', updatePost)
postRouter.delete('/:id' , deletePost)

export default postRouter