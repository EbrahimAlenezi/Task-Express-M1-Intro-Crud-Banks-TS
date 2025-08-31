import { Schema, model, Types } from "mongoose";

const TagSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    posts: [{ type: Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

export default model("Tag", TagSchema);
