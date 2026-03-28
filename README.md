  ---                                                                                                                                                                                                                # NestDaddy API Examples                                                                                                                                                                                                                                                                                                                                                                                                              Code examples for integrating NestDaddy APIs in Python, JavaScript, and cURL.                                                                                                                                                                                                                                                                                                                                                         **Base URL:** `https://nestdaddy.com/api/v1/`                                                                                                                                                                      **Docs & API Keys:** [nestdaddy.com/apis](https://nestdaddy.com/apis)

  ---

  ## Authentication

  ```http
  X-API-Key: nd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```

  Or via query param:
  ```
  GET /api/v1/news/tech?key=nd_xxx
  ```

  ---

  ## Quick Start

  ### cURL

  ```bash
  # Search
  curl -H "X-API-Key: YOUR_KEY" "https://nestdaddy.com/api/v1/search?q=artificial+intelligence"

  # Tech News
  curl -H "X-API-Key: YOUR_KEY" "https://nestdaddy.com/api/v1/news/tech"

  # Financial News
  curl -H "X-API-Key: YOUR_KEY" "https://nestdaddy.com/api/v1/news/financial?category=crypto"
  ```

  ---

  ### Python

  ```python
  import requests

  API_KEY = "your_api_key_here"
  BASE_URL = "https://nestdaddy.com/api/v1"
  HEADERS = {"X-API-Key": API_KEY}

  # Web Search
  def search(query, limit=10):
      r = requests.get(f"{BASE_URL}/search", headers=HEADERS, params={"q": query, "limit": limit})
      r.raise_for_status()
      return r.json()

  # Tech News
  def get_tech_news(category="all", limit=10):
      r = requests.get(f"{BASE_URL}/news/tech", headers=HEADERS, params={"category": category, "limit": limit})
      r.raise_for_status()
      return r.json()

  # Financial News
  def get_financial_news(category="all", limit=10):
      r = requests.get(f"{BASE_URL}/news/financial", headers=HEADERS, params={"category": category, "limit": limit})
      r.raise_for_status()
      return r.json()

  # Example usage
  results = search("machine learning")
  for r in results["results"]:
      print(r["title"], "—", r["url"])

  news = get_tech_news(category="ai")
  for article in news["articles"]:
      print(article["title"], "—", article["published_at"])
  ```

  ---

  ### JavaScript (Node.js)

  ```javascript
  const API_KEY = "your_api_key_here";
  const BASE_URL = "https://nestdaddy.com/api/v1";

  const headers = { "X-API-Key": API_KEY };

  // Web Search
  async function search(query, limit = 10) {
    const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}`, { headers });
    return res.json();
  }

  // Tech News
  async function getTechNews(category = "all", limit = 10) {
    const res = await fetch(`${BASE_URL}/news/tech?category=${category}&limit=${limit}`, { headers });
    return res.json();
  }

  // Financial News
  async function getFinancialNews(category = "all", limit = 10) {
    const res = await fetch(`${BASE_URL}/news/financial?category=${category}&limit=${limit}`, { headers });
    return res.json();
  }

  // Example
  search("OpenAI").then(data => data.results.forEach(r => console.log(r.title)));
  getTechNews("ai").then(data => data.articles.forEach(a => console.log(a.title)));
  ```

  ---

  ## Available APIs

  | API | Endpoint | Categories |
  |-----|----------|------------|
  | Search | `/api/v1/search` | — |
  | Global News | `/api/v1/news/global` | — |
  | Tech News | `/api/v1/news/tech` | `ai` `startups` `security` `mobile` `cloud` |
  | Financial News | `/api/v1/news/financial` | `stocks` `crypto` `forex` `economy` `banking` |
  | AI Tools | `/api/v1/aitools` | — |
  | Games | `/api/v1/games` | — |
  | Images | `/api/v1/images` | — |
  | Software | `/api/v1/software` | — |
  | Research | `/api/v1/research` | — |

  ---

  ## Response Format

  Every response includes a `quota` object:

  ```json
  {
    "success": true,
    "results": [...],
    "quota": {
      "used": 42,
      "limit": 30000,
      "remaining": 29958
    }
  }
  ```

  ---

  ## Pricing

  | Tier | Requests/month | Price |
  |------|---------------|-------|
  | Trial | Full access | Free 7 days |
  | Starter | 30,000 | from $9.99/mo |
  | Growth | 100,000 | from $29/mo |
  | Pro | 500,000 | from $99/mo |

  Get your API key at [nestdaddy.com/apis](https://nestdaddy.com/apis)

  ---

