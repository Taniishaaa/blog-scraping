# BeyondChats – Full Stack Web Developer Intern Assignment

This repository contains my submission for the **BeyondChats Full Stack Web Developer Intern assignment**.

The project is divided into phases as mentioned in the assignment.  

## Phase 1 – Web Scraping + Database + APIs

### Objective
- Scrape the **oldest blog articles** from the BeyondChats blog website.
- Store the scraped articles in a database.
- Expose APIs to fetch the stored articles.

## What Phase 1 Does

1. Fetches the BeyondChats blogs page  
2. Extracts blog article links  
3. Filters valid blog articles (ignores tag pages)
4. Visits each article page
5. Scrapes:
   - Article title
   - Article content
   - Article URL
6. Stores the data in MongoDB
7. Provides basic APIs to retrieve articles

> Note: Some `/tag/` pages are intentionally skipped since they are not actual articles.


## Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Scraping**
- Axios (for HTTP requests)
- Cheerio (for HTML parsing)

---

## Data Flow (Phase 1)

BeyondChats Blogs Website

↓

Axios (fetch HTML)

↓

Cheerio (parse & extract data)

↓

MongoDB Atlas (store articles)

↓

Express APIs (serve articles)

## Local Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>

cd beyondchats-assignment/server

```
2. Install dependencies
``` npm install ```

3. Setup environment variables

Create a .env file inside server/:

``` MONGO_URI=your_mongodb_connection_string ```

4. Run the scraping script
``` node src/scripts/scrapeBlogs.js ```


This will scrape articles and store them in MongoDB.

5. Start the API server
``` node src/index.js```


APIs available:

GET /articles → fetch all articles

GET /articles/:id → fetch single article

### Known Limitations (Phase 1)

JavaScript-heavy or dynamically rendered websites are not handled.

Only text content is scraped (images and formatting are ignored).

Error handling is basic and will be improved in later phases.

### Upcoming Work

Phase 2: Google Search integration + LLM-based article rewriting

Phase 3: React frontend for displaying original and updated articles

## Author

Tanisha

This project was built specifically for the BeyondChats internship assignment.
All code is original and written while learning and implementing the required concepts.