 #!/bin/bash                                                                                                                                                                                                      
  API_KEY="your_api_key_here"
  BASE_URL="https://nestdaddy.com/api/v1"

  # Web Search
  echo "=== Web Search ==="
  curl -s -H "X-API-Key: $API_KEY" \
    "$BASE_URL/search?q=artificial+intelligence&limit=5" | python3 -m json.tool

  # Tech News (AI)
  echo "=== Tech News (AI) ==="
  curl -s -H "X-API-Key: $API_KEY" \
    "$BASE_URL/news/tech?category=ai&limit=5" | python3 -m json.tool

  # Financial News (Crypto)
  echo "=== Financial News (Crypto) ==="
  curl -s -H "X-API-Key: $API_KEY" \
    "$BASE_URL/news/financial?category=crypto&limit=5" | python3 -m json.tool

  # Global News
  echo "=== Global News ==="
  curl -s -H "X-API-Key: $API_KEY" \
    "$BASE_URL/news/global?limit=5" | python3 -m json.tool
