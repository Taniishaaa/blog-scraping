import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    url: String,
    originalContent: String,
    source: {
      type: String,
      default: "BeyondChats",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
