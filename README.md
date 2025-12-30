# BeyondChats – Full Stack Web Developer Intern Assignment

This repository contains my submission for the **BeyondChats Full Stack Web Developer Intern assignment**.

The project is implemented in multiple phases as described in the assignment document.

---

## Phase 1 – Web Scraping, Database, and APIs

### Objective
- Scrape the oldest blog articles from the BeyondChats blog website.
- Store the scraped articles in a database.
- Expose CRUD APIs to manage the stored articles.

---

### What Phase 1 Does

1. Fetches the BeyondChats blogs page  
2. Extracts blog article links  
3. Filters valid blog articles (ignores tag pages)  
4. Visits each article page  
5. Scrapes:
   - Article title
   - Article content
   - Article URL  
6. Stores the data in MongoDB  
7. Exposes CRUD APIs to access and modify articles  

Note: Some `/tag/` pages are intentionally skipped since they are not actual blog articles.

---

### APIs (Phase 1)

- GET /articles – Fetch all articles  
- GET /articles/:id – Fetch a single article  
- POST /articles – Create a new article  
- PUT /articles/:id – Update an existing article  
- DELETE /articles/:id – Delete an article  

---

## Phase 2 – Article Enhancement Using Google Search and LLM

### Objective
- Enhance existing articles using insights from top-ranking Google search results.
- Rewrite articles using an LLM while avoiding plagiarism.
- Store updated content and reference sources back into the database.

---

### What Phase 2 Does

1. Fetches articles from the Phase 1 APIs  
2. Searches the article title on Google using a Search API  
3. Selects two relevant blog/article links from search results  
4. Scrapes the main textual content from those competitor articles  
5. Uses an LLM to rewrite the original article:
   - Improves clarity and structure
   - Uses competitor articles only as inspiration
   - Avoids copying or plagiarism  
6. Updates the original article in the database using APIs  
7. Stores reference URLs used for rewriting  

---

### LLM Choice

Groq (LLaMA 3.1) is used for article rewriting.  
It was chosen because it is free to use, fast, and suitable for content transformation tasks without requiring a paid API subscription.

---

### Data Stored After Phase 2

Each article may now contain:
- originalContent
- updatedContent
- references (array of competitor article URLs)

---

## Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

Scraping and APIs:
- Axios
- Cheerio
- SerpAPI (Google Search results)

LLM:
- Groq SDK (LLaMA 3.1)

---

## Data Flow Overview

Phase 1 Flow:
BeyondChats Blog → Axios → Cheerio → MongoDB → Express APIs

Phase 2 Flow:
Articles API → Google Search API → Competitor Article Scraping → LLM (Groq) → Updated Article via API

---

## Local Setup Instructions

1. Clone the repository

```
git clone <your-repo-url>  

cd beyondchats-assignment/server 
``` 

2. Install dependencies

```
npm install  
```

3. Create environment variables

Create a `.env` file inside the server directory with the following values:

```
MONGO_URI=your_mongodb_connection_string  

SERPAPI_KEY=your_serpapi_key  

GROQ_API_KEY=your_groq_api_key  
```

4. Run Phase 1 scraping

```node src/scripts/scrapeBlogs.js ```  

This will scrape BeyondChats blog articles and store them in MongoDB.

5. Start the API server

```node src/index.js  ```

6. Run Phase 2 scripts (manual execution)

```
node src/scripts/phase2/fetchArticles.js 

node src/scripts/phase2/googleSearch.js  

node src/scripts/phase2/scrapeCompetitor.js  

node src/scripts/phase2/rewriteWithGroq.js 

node src/scripts/phase2/updateArticle.js 
```

## Known Limitations

- JavaScript-heavy or dynamically rendered websites are not supported for scraping.
- Only textual content is processed (images and formatting are ignored).
- Phase 2 workflow is semi-manual to maintain clarity and simplicity.
- Error handling is minimal and focused on assignment requirements.

---

## Upcoming Work

Phase 3: A React-based frontend to display:
- Original articles
- Updated articles
- Reference sources

---

## Author

Tanisha

This project was built specifically for the BeyondChats internship assignment.  
All code is original and written while learning and implementing the required concepts.
