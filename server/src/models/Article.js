import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    url: String,
    originalContent: String,

    updatedContent: {
      type: String,
      default: null,
    },

    references: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
