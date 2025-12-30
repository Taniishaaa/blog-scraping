import axios from "axios";
import * as cheerio from "cheerio";

const scrapeArticleContent = async (url) => {
  try {
    const res = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    const html = res.data;
    const $ = cheerio.load(html);

    // remove noisy elements
    $("script, style, nav, footer, header").remove();

    const paragraphs = $("p")
      .map((_, el) => $(el).text().trim())
      .get()
      .filter((text) => text.length > 50);

    return paragraphs.join("\n\n");
  } catch (err) {
    console.error(`Failed to scrape ${url}`);
    return null;
  }
};

const run = async () => {
  const competitorUrls = [
    "https://www.proprofschat.com/blog/best-sales-chatbot/",
    "https://www.lindy.ai/blog/best-ai-chatbots-for-businesses",
  ];

  for (const url of competitorUrls) {
    console.log(`\nScraping: ${url}\n`);
    const content = await scrapeArticleContent(url);

    if (!content) {
      console.log("Skipped\n");
      continue;
    }

    console.log(content.substring(0, 500));
    console.log("\n--- END PREVIEW ---\n");
  }
};

run();
