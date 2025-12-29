import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import Article from "../models/Article.js";

dotenv.config();

const BLOG_URL = "https://beyondchats.com/blogs/";

const scrapeBlogs = async () => {
  await connectDB();

  const response = await axios.get(BLOG_URL);  //Fetch HTML
  const html = response.data;

  const $ = cheerio.load(html);  //Load HTML into Cheerio

  const blogLinks = [];

 $("a").each((_, element) => {
  const href = $(element).attr("href");

  if (!href) return;

  if (href.startsWith("http") && href.includes("/blogs/")) {
    blogLinks.push(href);
  }

  else if (href.startsWith("/blogs/")) {
    blogLinks.push(`https://beyondchats.com${href}`);
  }
});

  const uniqueLinks = [...new Set(blogLinks)].slice(-5);  // Remove duplicates & take oldest 5

  console.log("Blog links:", uniqueLinks);

  //Scrape content
  for (const link of uniqueLinks) {
    const blogRes = await axios.get(link);
    const blogHtml = blogRes.data;
    const $$ = cheerio.load(blogHtml);

    const title = $$("h1").first().text().trim();
    const content = $$("p")
      .map((_, p) => $$(p).text())
      .get()
      .join("\n\n");

    if (!title || !content) continue;

    await Article.create({
      title,
      url: link,
      originalContent: content,
    });

    console.log(`Saved: ${title}`);
  }

  console.log("Scraping complete");
  process.exit();
};

scrapeBlogs();
