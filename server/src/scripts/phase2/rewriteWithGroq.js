import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function rewriteArticle(original, comp1, comp2) {
  const prompt = `
You are a professional content editor.

Rewrite the ORIGINAL ARTICLE to improve clarity, structure, and readability.
Use the COMPETITOR ARTICLES only for inspiration.
Do NOT copy sentences.
Do NOT plagiarize.

ORIGINAL ARTICLE:
${original}

COMPETITOR ARTICLE 1:
${comp1}

COMPETITOR ARTICLE 2:
${comp2}

Return a well-structured article with headings and paragraphs.
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.6,
  });

  return response.choices[0].message.content;
}

async function run() {
  const original = `
AI chatbots are becoming increasingly popular among businesses.
They help automate customer interactions, answer queries, and improve efficiency.
Choosing the right chatbot depends on accuracy, user experience, and integration capabilities.
`;

  const comp1 = `
AI sales chatbots assist businesses by engaging visitors in real time.
They help qualify leads, answer questions, and operate 24/7.
Modern chatbots integrate with CRMs and support multiple languages.
`;

  const comp2 = `
Business AI chatbots use NLP and machine learning to understand customer intent.
They can automate workflows, schedule meetings, and provide instant support.
Well-designed chatbots improve customer satisfaction and reduce operational costs.
`;

  const rewritten = await rewriteArticle(original, comp1, comp2);

  console.log("\n--- REWRITTEN ARTICLE ---\n");
  console.log(rewritten);
}

run();
