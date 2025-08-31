import { Request, Response } from "express";
import Author from "../../db/models/Author";
import Post from "../../db/models/Posts";
import Tag from "../../db/models/Tag";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body || {};
    if (!title || !authorId)
      return res
        .status(400)
        .json({ message: "title and authorId are required" });
    const author = await Author.findById(authorId);
    if (!author) return res.status(404).json({ message: "author not found" });
    const post = await Post.create({ title, content, author: author._id });
    await Author.updateOne(
      { _id: author._id },
      { $addToSet: { posts: post._id } }
    );
    res.status(201).json(post);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const list = await Post.find().populate("author").populate("tags");
    res.status(200).json(list);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};

export const addTagToPost = async (req: Request, res: Response) => {
  try {
    const { postId, tagId } = req.params;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "post not found" });
    const tag = await Tag.findById(tagId);
    if (!tag) return res.status(404).json({ message: "tag not found" });
    await Post.updateOne({ _id: post._id }, { $addToSet: { tags: tag._id } });
    await Tag.updateOne({ _id: tag._id }, { $addToSet: { posts: post._id } });
    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).json({ message: e.message || "Server error" });
  }
};
