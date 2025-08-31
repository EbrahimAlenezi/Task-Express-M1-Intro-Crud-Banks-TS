import { Router } from "express";
import { createAuthor, getAuthors } from "./authors.controllers";

const router = Router();

router.post("/authors", createAuthor);
router.get("/authors", getAuthors);

export default router;
