# eNGe Bloom

Design a premium, clean, extremely fast ecommerce website for an Indian gardening and plant brand called eNGe.

The website will ultimately be implemented as a native Shopify Online Store 2.0 theme, so design the UI as a Shopify-compatible ecommerce storefront rather than as a complex web application.

BRAND

Brand: eNGe

Business: Plants, pots, gardening supplies, organic gardening products and gardening services.

Location: Bengaluru, Karnataka, India.

The brand should feel:

Real

Green

Warm

Modern

Premium but approachable

Bengaluru

Nature-focused

Practical

Trustworthy

Do NOT make it look like a generic Shopify template, generic nursery website, or luxury fashion website.

Avoid:

Excessive gradients

Glassmorphism

Huge rounded cards everywhere

Excessive animations

Stock photography

Generic AI-looking illustrations

Dark luxury aesthetics

Excessive shadows

Clutter

Giant promotional banners

Carousels that automatically rotate

Excessive text

BRAND DESIGN SYSTEM

Primary green: #02682F
Mint wash: #E6FAF6
Light background: #F7F7F7
Charcoal: #111111
Body text: #2B2B2B
Secondary text: #77798C
White: #FFFFFF

Typography:
Poppins

Use:

ExtraBold 800 for major headings

SemiBold 600 for section headings

Regular 400 for body text

Bold 700 for CTAs

Use generous whitespace and strong visual hierarchy.

Buttons should have approximately 6px radius rather than highly rounded pill buttons.

WEBSITE OBJECTIVE

The primary purpose is ecommerce.

The site must make it extremely easy to:

Discover plants

Discover gardening products

Search for products

Understand products

Add products to cart

Checkout

Find the physical eNGe store

Discover gardening services

The design must prioritize conversion without looking aggressively sales-oriented.

HOMEPAGE

Create the following sections:

1. Header

Minimal, clean header.

Left:
eNGe logo

Center:
Plants
Pots
Gardening
Manure & Soil
Services

Right:
Search
Account
Cart

On mobile use:
Logo
Search
Cart
Menu

Header should become sticky on scroll but remain visually lightweight.

2. Hero

Large editorial-style hero section.

Headline:

"Bring Home Something Green."

Supporting text:

"Plants, pots and everything you need to grow a greener space."

Primary CTA:
"Shop Plants"

Secondary CTA:
"Explore Gardening"

Use a high-quality real plant/product photograph.

Do not use a video background.

Do not make the hero unnecessarily tall.

3. Shop By Category

Clean visual category navigation.

Categories:

Indoor Plants
Outdoor Plants
Flowering Plants
Air Purifying Plants
Pots & Planters
Organic Manure
Potting Mix
Gardening Essentials

Use real product/category photography.

4. Bestsellers

Create a clean ecommerce product grid.

Desktop:
4 products per row.

Tablet:
3 products.

Mobile:
2 products.

Product cards should display:

Product image

Product name

Short descriptor where appropriate

Price

Compare-at price if applicable

Availability

Add to cart

Do not use huge cards.

5. Plant Finder / Shopping by Need

Create a visually interesting section:

"Looking for the right plant?"

Options:

Low Light
Easy Care
Pet Friendly
Air Purifying
Flowering
Indoor
Outdoor

Each option should lead to a relevant Shopify collection.

6. Gardening Essentials

Feature high-volume gardening products:

Potting Mix
Vermicompost
Organic Manure
Neem Oil
Seaweed
Gypsum
Epsom Salt
Bonemeal

Make this section feel like a useful gardening toolkit rather than an advertisement.

7. Why eNGe

Keep this extremely concise.

Use factual trust points such as:

300+ plant/product options
Gardening expertise
Physical store in HSR Layout
Gardening services
Local Bengaluru availability

Avoid making unsupported claims.

8. Visit eNGe

Create a beautiful store section.

Headline:

"Come See Us."

Location:
HSR Layout, Bengaluru

CTA:
"Get Directions"

Include:
Store photograph
Opening hours area
Google Maps CTA

Do not embed a huge heavy map by default. Use a lightweight map/directions link.

9. Gardening Services

Show:

Garden setup
Garden maintenance
Plant care
Repotting
Balcony gardening

CTA:
"Explore Services"

10. Gardening Journal

Create a clean editorial section for SEO.

Example article categories:

Plant Care
Gardening Tips
Indoor Plants
Pots & Planters
Organic Gardening
Bengaluru Gardening

11. Footer

Include:

Shop
Plants
Pots
Gardening Products
Services
About eNGe
Contact
Store Location
Shipping
Returns
Privacy
Terms
Instagram
WhatsApp

PRODUCT PAGE

Design a highly optimized ecommerce product page.

Desktop:
Large product gallery on left.
Product information on right.

Include:

Product name
Rating if available
Price
Compare-at price
Availability
Variant selector
Quantity
Add to Cart
Buy Now where appropriate

Then:

Product description
Key benefits
Specifications
Plant care / usage instructions
Shipping information
FAQs
Related products

The Add to Cart CTA should remain highly visible.

Do not overwhelm the customer with unnecessary information above the fold.

COLLECTION PAGE

Design:

Breadcrumb
Collection title
Short SEO introduction
Filters
Sort
Product grid
Pagination or progressive loading

Filters should include relevant attributes such as:

Price
Plant type
Light requirement
Size
Pot type
Use case

Only show filters where actual product data exists.

SEARCH

Create a fast predictive search interface.

Search examples:

"snake plant"
"ceramic pot"
"vermicompost"
"indoor plants"

Show product suggestions and a full search results page.

CART

Create a clean cart drawer.

Display:
Product
Quantity
Price
Subtotal
Estimated shipping where applicable
Checkout CTA

Avoid unnecessary upsells.

Add relevant cross-sell suggestions such as:
Plant → Pot
Pot → Potting mix
Plant → Manure

PERFORMANCE REQUIREMENTS

This is extremely important.

The website must prioritize:

Fast loading

Minimal JavaScript

Minimal third-party libraries

Optimized responsive images

Lazy loading below-the-fold images

Proper image dimensions

No autoplay video

No heavy animation libraries

No unnecessary dependencies

No excessive DOM nesting

Mobile-first CSS

Avoid building functionality that requires a large client-side React application.

The final implementation will be converted into Shopify Liquid, so keep the visual components modular and easy to translate into Shopify sections.

SEO REQUIREMENTS

Design the site with SEO in mind.

Use:

One clear H1 per page

Logical H2/H3 hierarchy

Semantic HTML

Descriptive image alt text

Crawlable text

Clean URLs

Internal linking

Breadcrumbs

Product structured data

Collection structured data where appropriate

Article structured data for blog posts

FAQ structured data only where genuinely appropriate

Canonical URLs

XML sitemap compatibility

Robots.txt compatibility

Do not create fake SEO text purely to increase word count.

SEO copy should be useful to humans.

DESIGN LANGUAGE

Think:

"Modern Bengaluru plant store meets clean editorial ecommerce."

The website should look excellent even with very little text.

Use large photography, whitespace, subtle borders and restrained shadows.

Do not use generic ecommerce gradients.

Do not make every section a rounded rectangle.

Use asymmetry and editorial layouts where appropriate.

The final design should feel custom-designed specifically for eNGe.

RESPONSIVE DESIGN

Design desktop, tablet and mobile states.

Mobile is extremely important.

On mobile:

Keep navigation simple

Use a 2-column product grid

Keep product images large

Make Add to Cart accessible

Keep checkout friction low

Avoid huge vertical gaps

Avoid excessive popups

IMPORTANT IMPLEMENTATION CONSTRAINT

The visual design will later be rebuilt as a Shopify Online Store 2.0 theme using:

Liquid
JSON templates
Shopify sections
Shopify snippets
CSS
Vanilla JavaScript

Therefore avoid UI patterns that depend on React-only state management or complex application architecture.

The final design should translate cleanly into Shopify sections and blocks.

Create the homepage first and make it exceptionally polished before expanding to the remaining pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45bb9d29-b0db-416e-a12a-0a55d362204b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
