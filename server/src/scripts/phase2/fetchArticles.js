import axios from "axios";

const API_URL = "http://localhost:5000/articles";

const fetchArticles = async () => {
  try {
    const res = await axios.get(API_URL);
    const articles = res.data;

    console.log(`Fetched ${articles.length} articles`);

    articles.forEach((article, index) => {
      console.log(`\n${index + 1}. ${article.title}`);
    });
  } catch (err) {
    console.error("Failed to fetch articles", err.message);
  }
};

fetchArticles();
