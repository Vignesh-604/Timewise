# SEO Implementation Guide - Timewise

This document outlines the Search Engine Optimization (SEO) strategies implemented in the Timewise application using Next.js 14.

## 1. Global Metadata Configuration
**Location:** `app/layout.js`

We utilize Next.js's Metadata API to define site-wide SEO defaults. This ensures every page has a baseline level of optimization.

*   **Title Template:** Defined as `%s | Timewise`. Pages can provide their own title (e.g., "Rolex Gold"), which automatically renders as "Rolex Gold | Timewise".
*   **Description:** A compelling default description for the entire site.
*   **Keywords:** A comprehensive list of keywords including categories ("mens watches"), styles ("leather strap"), and intent ("gift for him").
*   **Open Graph (OG):** Configured for rich social media sharing (Facebook, LinkedIn, etc.), including a default specialized banner image (`/logo-bg.jpeg`).
*   **Twitter Cards:** Specifically configured for large image summaries on Twitter.
*   **Metadata Base:** Set to the production URL to ensure all relative links (like images) resolve correctly for bots.

## 2. Dynamic Product SEO (Server-Side)
**Location:** `app/watch/[id]/page.js`

Since product pages are the most important for organic search, they are rendered on the server to generate unique metadata for each watch.

*   **Dynamic Title & Description:** The `generateMetadata` function fetches the specific watch data to populate the `<title>` and `<meta name="description">` tags dynamically.
*   **Dynamic OG Images:** When a product is shared, the preview image is the actual image of the watch, not a generic site logo.

## 3. Structured Data (JSON-LD)
**Location:** `app/watch/[id]/page.js`

We inject **Schema.org** structured data into the `<head>` of product pages.

*   **Type:** `Product`
*   **Properties:** Name, Image, Description, Brand, Price, Currency, and Availability.
*   **Benefit:** This allows search engines to display "Rich Snippets" in search results, such as showing the price, star rating, and "In Stock" status directly in Google.

## 4. Automatic Sitemap Generation
**Location:** `app/sitemap.js`

A dynamic `sitemap.xml` is generated automatically at build/runtime.

*   **Scope:** It includes not just static routes (`/`, `/about`), but iterates through **all categories** and **all watch products** in the database.
*   **Priority:** Sets higher priority (0.8 - 1.0) for main pages and categories, and 0.6 for individual products.
*   **Benefit:** Helps Google crawl deep links in the catalog that might otherwise be missed.

## 5. Crawler Control (Robots.txt)
**Location:** `app/robots.js`

A dynamic `robots.txt` file controls where search engines are allowed to go.

*   **Allow:** `/` (Everything by default)
*   **Disallow:** `/admin/` (Keeps sensitive admin routes out of search results) and `/api/` (Prevents crawling backend endpoints).
*   **Sitemap Link:** Explicitly points bots to the designated `sitemap.xml`.

## Summary of Files
*   `app/layout.js`: Global meta tags, keywords, social sharing.
*   `app/watch/[id]/page.js`: Server-side rendering for dynamic product tags and JSON-LD.
*   `components/WatchDetailClient.jsx`: The interactive UI for the product page (separated to allow the parent page to remain server-side).
*   `app/sitemap.js`: Dynamic XML sitemap generator.
*   `app/robots.js`: Crawler permissions.
