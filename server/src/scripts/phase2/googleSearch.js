import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SERP_API_KEY = process.env.SERPAPI_KEY;

const searchGoogle = async (query) => {
  const url = "https://serpapi.com/search.json";

  const params = {
    q: query,
    engine: "google",
    api_key: SERP_API_KEY,
    num: 5,
  };

  const res = await axios.get(url, { params });

  return res.data.organic_results || [];
};

const run = async () => {
  const articleTitle =
    "Which AI Chatbot Is Right for Your Business in 2025?";

  const results = await searchGoogle(articleTitle);

  console.log("Top Google results:\n");

  results.slice(0, 5).forEach((r, i) => {
    console.log(`${i + 1}. ${r.title}`);
    console.log(`   ${r.link}\n`);
  });
};

run();
