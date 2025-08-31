import { Request, Response } from "express";
import Author from "../../db/models/Author";

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { name } = req.body || {};
    if (!name) return res.status(400).json({ message: "name is required" });
    const doc = await Author.create({ name });
    res.status(201).json(doc);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};

export const getAuthors = async (_req: Request, res: Response) => {
  try {
    const list = await Author.find().populate("posts");
    res.status(200).json(list);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};
