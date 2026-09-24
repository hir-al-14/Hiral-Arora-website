# Search appearance checklist

The preferred address is https://hiralarora.com/. The page title, description,
canonical URL, favicon and structured data live in index.html. Public crawl files
are public/robots.txt and public/sitemap.xml.

After deploying:

1. Verify the homepage actually renders, and /logo/favicon.png, /robots.txt and
   /sitemap.xml are accessible. The previous metadata edit accidentally removed
   the React root and module script; keep both in index.html.
2. In the existing Vercel project's domain settings, redirect
   hiral-arora.vercel.app to https://hiralarora.com with a permanent redirect.
   Preserve paths. If www.hiralarora.com is configured, redirect it there too.
   Do not block the old domain in robots.txt; Google needs to crawl its redirect.
3. Add hiralarora.com as a Domain property in Google Search Console. Add the exact
   TXT record Google supplies at your DNS provider, preserving existing records.
4. Submit https://hiralarora.com/sitemap.xml in Search Console's Sitemaps area.
5. Inspect https://hiralarora.com/, run the live test, then request indexing.
6. Link to https://hiralarora.com/ from your GitHub profile and LinkedIn website
   field. Use that same address consistently on profiles and project pages.
7. For old portfolio URLs you own, use a permanent redirect to the matching new
   page. For content intentionally deleted without replacement, use 404/410.
   Search Console temporary removals aren't a replacement for either solution.

Google chooses the displayed title, snippet, favicon and ranking. Changes can
require days to weeks after recrawling; requesting indexing does not guarantee
inclusion or first place. Unrelated results belonging to other people cannot be
removed merely to improve this portfolio's ranking. Collect exact unwanted URLs
before choosing any removal action.

References:
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
