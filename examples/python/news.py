 ---
  import requests

  API_KEY = "your_api_key_here"
  BASE_URL = "https://nestdaddy.com/api/v1"
  HEADERS = {"X-API-Key": API_KEY}


  def search(query, limit=10):
      r = requests.get(
          f"{BASE_URL}/search",
          headers=HEADERS,
          params={"q": query, "limit": limit}
      )
      r.raise_for_status()
      return r.json()


  def get_tech_news(category="all", limit=10):
      r = requests.get(
          f"{BASE_URL}/news/tech",
          headers=HEADERS,
          params={"category": category, "limit": limit}
      )
      r.raise_for_status()
      return r.json()


  def get_financial_news(category="all", limit=10):
      r = requests.get(
          f"{BASE_URL}/news/financial",
          headers=HEADERS,
          params={"category": category, "limit": limit}
      )
      r.raise_for_status()
      return r.json()


  def get_global_news(limit=10):
      r = requests.get(
          f"{BASE_URL}/news/global",
          headers=HEADERS,
          params={"limit": limit}
      )
      r.raise_for_status()
      return r.json()


  if __name__ == "__main__":
      print("=== Web Search ===")
      results = search("artificial intelligence")
      for item in results["results"]:
          print(f"  {item['title']}")
          print(f"  {item['url']}\n")

      print("=== Tech News (AI) ===")
      news = get_tech_news(category="ai")
      for article in news["articles"]:
          print(f"  {article['title']}")
          print(f"  {article['published_at']}\n")

      print("=== Financial News (Crypto) ===")
      news = get_financial_news(category="crypto")
      for article in news["articles"]:
          print(f"  {article['title']}\n")

  ---
