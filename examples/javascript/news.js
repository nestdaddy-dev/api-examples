 const API_KEY = "your_api_key_here";                                                                                                                                                                               const BASE_URL = "https://nestdaddy.com/api/v1";                                                                                                                                                                   const HEADERS = { "X-API-Key": API_KEY };

  async function search(query, limit = 10) {
    const res = await fetch(
      `${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}`,
      { headers: HEADERS }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function getTechNews(category = "all", limit = 10) {
    const res = await fetch(
      `${BASE_URL}/news/tech?category=${category}&limit=${limit}`,
      { headers: HEADERS }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function getFinancialNews(category = "all", limit = 10) {
    const res = await fetch(
      `${BASE_URL}/news/financial?category=${category}&limit=${limit}`,
      { headers: HEADERS }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function getGlobalNews(limit = 10) {
    const res = await fetch(
      `${BASE_URL}/news/global?limit=${limit}`,
      { headers: HEADERS }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Example usage
  (async () => {
    console.log("=== Web Search ===");
    const results = await search("artificial intelligence");
    results.results.forEach(r => console.log(`  ${r.title}\n  ${r.url}\n`));

    console.log("=== Tech News (AI) ===");
    const techNews = await getTechNews("ai");
    techNews.articles.forEach(a => console.log(`  ${a.title}\n  ${a.published_at}\n`));

    console.log("=== Financial News (Crypto) ===");
    const finNews = await getFinancialNews("crypto");
    finNews.articles.forEach(a => console.log(`  ${a.title}\n`));
  })();

  ---
