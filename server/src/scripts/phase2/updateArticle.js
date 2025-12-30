import axios from "axios";

const API_BASE = "http://localhost:5000/articles";

async function updateArticle(articleId, updatedContent, references) {
  try {
    const res = await axios.put(`${API_BASE}/${articleId}`, {
      updatedContent,
      references,
    });

    console.log("Article updated successfully");
    return res.data;
  } catch (err) {
    console.error("Failed to update article", err.message);
  }
}

async function run() {

  const articleId = "6952be72cd48fe989a7a9856";

  const updatedContent = `
**The Rise of AI Chatbots in Business: Enhancing Efficiency and Customer Experience**

**Introduction**

Artificial intelligence (AI) chatbots have become an essential tool for businesses, revolutionizing the way they interact with customers. These intelligent virtual assistants are designed to automate customer interactions, freeing up staff to focus on more complex tasks. As their popularity grows, businesses are recognizing the importance of choosing the right chatbot for their needs.

**Benefits of AI Chatbots**

AI chatbots offer numerous benefits to businesses, including improved efficiency, enhanced customer experience, and increased productivity. By automating routine tasks, chatbots enable businesses to:

- Respond to customer queries and resolve issues in real-time
- Qualify leads and provide personalized support
- Operate 24/7, ensuring continuous customer engagement
- Integrate with customer relationship management (CRM) systems and support multiple languages

**Key Features to Consider**

When selecting an AI chatbot, businesses must consider several key features to ensure a seamless integration and optimal performance. These include:

- **Accuracy**: The ability of the chatbot to accurately understand and respond to customer queries      
- **User Experience**: The ease of use and intuitive interface of the chatbot, ensuring a seamless customer experience
- **Integration Capabilities**: The ability of the chatbot to integrate with existing systems and platforms, such as CRMs and marketing automation software

**Best Practices for Implementing AI Chatbots**

To maximize the benefits of AI chatbots, businesses should follow best practices for implementation, including:

- **Designing a clear and intuitive interface**: Ensuring that the chatbot is easy to use and understand 
- **Training the chatbot on customer data**: Providing the chatbot with relevant customer data to improve its accuracy and effectiveness
- **Continuously monitoring and evaluating performance**: Regularly assessing the chatbot's performance and making adjustments as needed

By understanding the benefits, key features, and best practices for implementing AI chatbots, businesses can harness the power of these intelligent virtual assistants to enhance their customer experience, increase efficiency, and drive growth.
`;

  const references = [
    "https://www.lindy.ai/blog/best-ai-chatbots-for-businesses",
    "https://www.proprofschat.com/blog/best-sales-chatbot/",
  ];

  await updateArticle(articleId, updatedContent, references);
}

run();
