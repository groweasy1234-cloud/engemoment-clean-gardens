# eNGe Ecommerce Homepage

## Goal
Create an exceptionally polished, fast homepage for eNGe that feels like a modern Bengaluru plant store, prioritizes product discovery and conversion, and translates cleanly into Shopify Online Store 2.0 sections.

## Build
- Establish the supplied eNGe color and Poppins typography system with compact 6px controls, restrained borders, and editorial spacing.
- Create original, cohesive plant, product, and HSR-store imagery optimized for responsive display.
- Build a lightweight sticky header with desktop navigation and a focused mobile menu pattern.
- Build the homepage sections in this order: editorial hero, category navigation, bestsellers, plant finder, gardening toolkit, concise trust points, store visit, services, journal, and footer.
- Use realistic sample catalog data only to demonstrate layout, pricing, stock states, and add-to-cart interactions; keep content clearly replaceable by Shopify collections and product objects.
- Add a lightweight cart drawer, search overlay, and mobile navigation using small local state only—no heavy storefront framework or animation library.
- Make category, product, service, and journal links Shopify-ready placeholders without inventing unsupported business details such as store hours.

## Quality
- Use semantic landmarks, one H1, logical headings, descriptive image alt text, useful internal-link structure, and route-specific metadata.
- Use fixed image aspect ratios and dimensions, eager-load only the key hero image, and lazy-load below-the-fold assets.
- Verify desktop and mobile layouts, menu/search/cart interactions, image loading, text fit, and current build diagnostics.

## Technical details
- Implement the homepage in the existing TanStack Start preview while keeping each visual section modular and easy to convert into Liquid sections/snippets.
- Centralize all colors, typography, shadows, radii, and motion in the global design system using semantic tokens.
- Use CSS-first responsiveness and minimal React state; no database, Shopify connection, checkout backend, autoplay media, map embed, or third-party runtime dependencies in this phase.
