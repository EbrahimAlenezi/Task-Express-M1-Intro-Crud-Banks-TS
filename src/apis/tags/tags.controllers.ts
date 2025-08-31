import { Request, Response } from "express";
import Tag from "../../db/models/Tag";

export const createTag = async (req: Request, res: Response) => {
  try {
    const { name } = req.body || {};
    if (!name) return res.status(400).json({ message: "name is required" });
    const tag = await Tag.create({ name });
    res.status(201).json(tag);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};

export const getTags = async (_req: Request, res: Response) => {
  try {
    const list = await Tag.find().populate("posts");
    res.status(200).json(list);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};
