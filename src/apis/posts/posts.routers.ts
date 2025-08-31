import { Router } from "express";
import { createPost, getPosts, addTagToPost } from "./posts.controllers";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getPosts);
router.post("/posts/:postId/:tagId", addTagToPost);

export default router;
