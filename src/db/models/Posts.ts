import { Schema, model, Types } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "" },
    author: { type: Types.ObjectId, ref: "Author", required: true },
    tags: [{ type: Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

export default model("Post", PostSchema);
