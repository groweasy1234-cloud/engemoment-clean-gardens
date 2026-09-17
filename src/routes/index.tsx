import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Minus,
  Search,
  ShoppingBag,
  Sprout,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import categoryFlowering from "@/assets/category-flowering.jpg";
import categoryGardening from "@/assets/category-gardening.jpg";
import categoryIndoor from "@/assets/category-indoor.jpg";
import categoryPots from "@/assets/category-pots.jpg";
import engeHero from "@/assets/enge-hero.jpg";
import engeStore from "@/assets/enge-store.jpg";
import journalBalcony from "@/assets/journal-balcony.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "eNGe | Plants & Gardening in Bengaluru" },
      {
        name: "description",
        content:
          "Shop plants, pots, organic manure and gardening essentials from eNGe in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "eNGe | Bring Home Something Green" },
      {
        property: "og:description",
        content: "Plants, pots and everything you need to grow a greener space in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: EngeHome,
});

type Product = {
  name: string;
  detail: string;
  price: number;
  compareAt?: number;
  image: string;
  imageAlt: string;
  availability: string;
};

const categories = [
  { name: "Indoor Plants", image: categoryIndoor, position: "object-center" },
  { name: "Outdoor Plants", image: categoryFlowering, position: "object-left" },
  { name: "Flowering Plants", image: categoryFlowering, position: "object-center" },
  { name: "Air Purifying Plants", image: categoryIndoor, position: "object-left" },
  { name: "Pots & Planters", image: categoryPots, position: "object-center" },
  { name: "Organic Manure", image: categoryGardening, position: "object-right" },
  { name: "Potting Mix", image: categoryGardening, position: "object-top" },
  { name: "Gardening Essentials", image: categoryGardening, position: "object-left" },
];

const products: Product[] = [
  {
    name: "Snake Plant Laurentii",
    detail: "Easy care · Indoor",
    price: 399,
    compareAt: 499,
    image: categoryIndoor,
    imageAlt: "Snake plant in an off-white ceramic pot",
    availability: "In stock",
  },
  {
    name: "Peace Lily",
    detail: "Air purifying · Flowering",
    price: 449,
    image: categoryFlowering,
    imageAlt: "Flowering peace lily in a white planter",
    availability: "In stock",
  },
  {
    name: "Sage Ceramic Planter",
    detail: "6 inch · With drainage tray",
    price: 699,
    compareAt: 799,
    image: categoryPots,
    imageAlt: "Sage green ceramic plant pot with tray",
    availability: "Only a few left",
  },
  {
    name: "Home Potting Mix",
    detail: "Ready to use · 5 kg",
    price: 299,
    image: categoryGardening,
    imageAlt: "Rich potting mix with gardening tools",
    availability: "In stock",
  },
];

const needs = ["Low Light", "Easy Care", "Pet Friendly", "Air Purifying", "Flowering", "Indoor", "Outdoor"];
const essentials = [
  "Potting Mix",
  "Vermicompost",
  "Organic Manure",
  "Neem Oil",
  "Seaweed",
  "Gypsum",
  "Epsom Salt",
  "Bonemeal",
];

const services = ["Garden setup", "Garden maintenance", "Plant care", "Repotting", "Balcony gardening"];

const searchSuggestions = [
  { label: "Snake plant", hint: "Indoor plants" },
  { label: "Ceramic pot", hint: "Pots & planters" },
  { label: "Vermicompost", hint: "Organic manure" },
  { label: "Indoor plants", hint: "Plant collection" },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className={inverse ? "brand-logo brand-logo-inverse" : "brand-logo"} aria-label="eNGe home">
      <span>eNGe</span>
      <Leaf aria-hidden="true" />
    </a>
  );
}

function EngeHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState<Product | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen || cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen, cartOpen]);

  const filteredSuggestions = useMemo(
    () =>
      query
        ? searchSuggestions.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query.toLowerCase()))
        : searchSuggestions,
    [query],
  );

  const addToCart = (product: Product) => {
    setCartItem(product);
    setCartCount((count) => count + 1);
    setCartOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="mobile-menu-button">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu />
            </Button>
          </div>
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#shop-plants">Plants</a>
            <a href="#categories">Pots</a>
            <a href="#essentials">Gardening</a>
            <a href="#essentials">Manure &amp; Soil</a>
            <a href="#services">Services</a>
          </nav>
          <div className="header-actions">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="Search products">
              <Search />
            </Button>
            <Button variant="ghost" size="icon" className="account-button" aria-label="Your account">
              <UserRound />
            </Button>
            <Button variant="ghost" size="icon" className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Cart with ${cartCount} items`}>
              <ShoppingBag />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img src={engeHero} alt="A green Bengaluru balcony filled with thriving potted plants" width={1536} height={1024} fetchPriority="high" />
          <div className="hero-content">
            <p className="eyebrow">Your Bengaluru garden store</p>
            <h1 id="hero-title">Bring Home<br />Something Green.</h1>
            <p className="hero-copy">Plants, pots and everything you need to grow a greener space.</p>
            <div className="hero-actions">
              <Button size="lg" asChild><a href="#shop-plants">Shop Plants <ArrowRight /></a></Button>
              <Button variant="outline" size="lg" asChild><a href="#essentials">Explore Gardening</a></Button>
            </div>
          </div>
        </section>

        <section id="categories" className="section-shell category-section" aria-labelledby="category-title">
          <div className="section-heading-row">
            <div><p className="eyebrow">Start here</p><h2 id="category-title">Shop by category</h2></div>
            <a href="#shop-plants" className="text-link">View all <ArrowRight /></a>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a href="#shop-plants" className="category-tile" key={category.name}>
                <img src={category.image} alt={`${category.name} at eNGe`} width={1200} height={1200} loading="lazy" className={category.position} />
                <span>{category.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="shop-plants" className="section-shell product-section" aria-labelledby="bestsellers-title">
          <div className="section-heading-row">
            <div><p className="eyebrow">Loved in Bengaluru</p><h2 id="bestsellers-title">Bestsellers</h2></div>
            <a href="#categories" className="text-link">Shop all <ArrowRight /></a>
          </div>
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.name} product={product} onAdd={() => addToCart(product)} />)}
          </div>
        </section>

        <section className="finder-section" aria-labelledby="finder-title">
          <div className="section-shell finder-inner">
            <div className="finder-intro">
              <Sprout aria-hidden="true" />
              <p className="eyebrow">Plant finder</p>
              <h2 id="finder-title">Looking for the right plant?</h2>
              <p>Choose what matters to your space. We’ll help narrow down the leafy possibilities.</p>
            </div>
            <div className="need-grid">
              {needs.map((need) => <a href="#shop-plants" key={need}>{need}<ChevronRight /></a>)}
            </div>
          </div>
        </section>

        <section id="essentials" className="section-shell essentials-section" aria-labelledby="essentials-title">
          <div className="essentials-layout">
            <div className="essentials-photo">
              <img src={categoryGardening} alt="Gardening tools, potting mix, neem oil and coir" width={1200} height={1200} loading="lazy" />
              <span>Grow better,<br />from the roots up.</span>
            </div>
            <div className="essentials-content">
              <p className="eyebrow">The gardening toolkit</p>
              <h2 id="essentials-title">Everyday essentials for healthier plants.</h2>
              <p className="section-copy">Practical soil, nutrition and plant-care staples for balconies, home gardens and everything in between.</p>
              <div className="essential-list">
                {essentials.map((item, index) => (
                  <a href="#shop-plants" key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}<ArrowRight /></a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-labelledby="trust-title">
          <div className="section-shell">
            <div className="trust-heading"><p className="eyebrow">Why eNGe</p><h2 id="trust-title">Local knowledge. Real gardening help.</h2></div>
            <div className="trust-points">
              {["300+ plant & product options", "Gardening expertise", "Store in HSR Layout", "Garden services", "Available in Bengaluru"].map((point) => (
                <div key={point}><Check /><span>{point}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="visit-section" aria-labelledby="visit-title">
          <div className="visit-image"><img src={engeStore} alt="The welcoming eNGe plant store in HSR Layout, Bengaluru" width={1408} height={1056} loading="lazy" /></div>
          <div className="visit-content">
            <p className="eyebrow">Visit eNGe</p>
            <h2 id="visit-title">Come See Us.</h2>
            <p>Browse plants in person, compare pots, and talk through what will work in your space.</p>
            <div className="visit-detail"><MapPin /><div><strong>HSR Layout</strong><span>Bengaluru, Karnataka</span></div></div>
            <div className="visit-detail"><Clock3 /><div><strong>Opening hours</strong><span>Check current hours before your visit</span></div></div>
            <Button size="lg" asChild><a href="https://www.google.com/maps/search/?api=1&query=eNGe+HSR+Layout+Bengaluru" target="_blank" rel="noreferrer">Get Directions <ArrowRight /></a></Button>
          </div>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-title">
          <div className="section-shell services-inner">
            <div className="services-copy"><p className="eyebrow">Gardening services</p><h2 id="services-title">A little help goes a long way.</h2><p>From setting up a balcony garden to keeping it thriving, our team can help.</p><Button variant="outline" size="lg" asChild><a href="#services-list">Explore Services <ArrowRight /></a></Button></div>
            <ol id="services-list" className="services-list">
              {services.map((service, index) => <li key={service}><span>{String(index + 1).padStart(2, "0")}</span><strong>{service}</strong><ArrowRight /></li>)}
            </ol>
          </div>
        </section>

        <section className="section-shell journal-section" aria-labelledby="journal-title">
          <div className="section-heading-row"><div><p className="eyebrow">Gardening journal</p><h2 id="journal-title">Learn as you grow.</h2></div><a href="#journal" className="text-link">Read all <ArrowRight /></a></div>
          <div id="journal" className="journal-grid">
            <article className="journal-feature">
              <a href="#journal"><img src={journalBalcony} alt="Repotting a pothos on a Bengaluru balcony" width={1200} height={912} loading="lazy" /></a>
              <div><p className="article-category">Plant Care · 6 min read</p><h3><a href="#journal">How to repot a plant without stressing it</a></h3><p>A practical guide to fresh soil, the right pot size and gentler transitions.</p></div>
            </article>
            <div className="journal-list">
              {[
                ["Bengaluru Gardening", "What the Bengaluru monsoon means for your plants"],
                ["Indoor Plants", "Seven easy plants for bright apartment corners"],
                ["Organic Gardening", "A simple guide to neem oil"],
              ].map(([category, title]) => <article key={title}><p className="article-category">{category}</p><h3><a href="#journal">{title}</a></h3><a href="#journal" className="read-link">Read story <ArrowRight /></a></article>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      {searchOpen && <SearchOverlay query={query} setQuery={setQuery} suggestions={filteredSuggestions} searchRef={searchRef} onClose={() => setSearchOpen(false)} />}
      {cartOpen && <CartDrawer item={cartItem} count={cartCount} onClose={() => setCartOpen(false)} onDecrease={() => setCartCount((count) => Math.max(0, count - 1))} onIncrease={() => setCartCount((count) => count + 1)} />}
    </div>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <article className="product-card">
      <a href="#shop-plants" className="product-image-wrap">
        {product.compareAt && <span className="sale-badge">Save ₹{product.compareAt - product.price}</span>}
        <img src={product.image} alt={product.imageAlt} width={1200} height={1200} loading="lazy" />
      </a>
      <div className="product-info">
        <p className="stock-line"><span />{product.availability}</p>
        <h3><a href="#shop-plants">{product.name}</a></h3>
        <p className="product-detail">{product.detail}</p>
        <div className="product-buy-row">
          <p className="price"><strong>₹{product.price}</strong>{product.compareAt && <s>₹{product.compareAt}</s>}</p>
          <Button variant="outline" size="sm" onClick={onAdd} aria-label={`Add ${product.name} to cart`}>Add</Button>
        </div>
      </div>
    </article>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="overlay-root"><button className="overlay-scrim" onClick={onClose} aria-label="Close menu" /><aside className="mobile-panel" aria-label="Mobile menu"><div className="panel-head"><Logo /><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu"><X /></Button></div><nav>{["Plants", "Pots", "Gardening", "Manure & Soil", "Services"].map((item) => <a href={item === "Services" ? "#services" : item === "Plants" ? "#shop-plants" : "#categories"} key={item} onClick={onClose}>{item}<ChevronRight /></a>)}</nav><div className="mobile-panel-note"><MapPin /><span>HSR Layout, Bengaluru</span></div></aside></div>;
}

function SearchOverlay({ query, setQuery, suggestions, searchRef, onClose }: { query: string; setQuery: (value: string) => void; suggestions: typeof searchSuggestions; searchRef: React.RefObject<HTMLInputElement | null>; onClose: () => void }) {
  return <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Product search"><div className="search-shell"><div className="search-head"><Logo /><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close search"><X /></Button></div><div className="search-input-wrap"><Search /><input ref={searchRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search plants, pots, gardening..." aria-label="Search products" /></div><p className="search-label">{query ? "Suggested results" : "Popular searches"}</p><div className="search-results">{suggestions.length ? suggestions.map((item) => <a href="#shop-plants" key={item.label} onClick={onClose}><div><strong>{item.label}</strong><span>{item.hint}</span></div><ArrowRight /></a>) : <p>No close matches. Try “indoor plants”.</p>}</div></div></div>;
}

function CartDrawer({ item, count, onClose, onDecrease, onIncrease }: { item: Product | null; count: number; onClose: () => void; onDecrease: () => void; onIncrease: () => void }) {
  const subtotal = item ? item.price * count : 0;
  return <div className="overlay-root"><button className="overlay-scrim" onClick={onClose} aria-label="Close cart" /><aside className="cart-panel" aria-label="Shopping cart"><div className="panel-head"><div><p className="eyebrow">Your cart</p><h2>{count} {count === 1 ? "item" : "items"}</h2></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close cart"><X /></Button></div>{item && count > 0 ? <><div className="cart-item"><img src={item.image} alt={item.imageAlt} width={1200} height={1200} /><div><h3>{item.name}</h3><p>{item.detail}</p><strong>₹{item.price}</strong><div className="quantity-control"><Button variant="ghost" size="icon" onClick={onDecrease} aria-label="Reduce quantity"><Minus /></Button><span>{count}</span><Button variant="ghost" size="icon" onClick={onIncrease} aria-label="Increase quantity">+</Button></div></div></div><div className="cart-cross-sell"><p>Goes well with</p><a href="#essentials" onClick={onClose}>Add potting mix to help it settle in <ArrowRight /></a></div><div className="cart-summary"><div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div><p>Shipping is calculated at checkout.</p><Button size="lg" className="w-full">Checkout securely <ArrowRight /></Button><Button variant="link" className="w-full" onClick={onClose}>Continue shopping</Button></div></> : <div className="empty-cart"><ShoppingBag /><h3>Your cart is ready for something green.</h3><p>Explore easy-care plants, pots and everyday garden essentials.</p><Button onClick={onClose} asChild><a href="#shop-plants">Shop bestsellers</a></Button></div>}</aside></div>;
}

function Footer() {
  const columns = [
    ["Shop", "Plants", "Pots", "Gardening Products", "Services"],
    ["eNGe", "About eNGe", "Contact", "Store Location"],
    ["Help", "Shipping", "Returns", "Privacy", "Terms"],
  ];
  return <footer className="site-footer"><div className="footer-main section-shell"><div className="footer-brand"><Logo inverse /><p>Real plants, practical gardening help and everything you need to grow in Bengaluru.</p><div className="footer-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-links">{columns.map(([heading, ...items]) => <div key={heading}><h2>{heading}</h2>{items.map((item) => <a href={item === "Services" ? "#services" : item === "Store Location" ? "#visit-title" : "#categories"} key={item}>{item}</a>)}</div>)}</div></div><div className="footer-bottom section-shell"><span>© 2026 eNGe, Bengaluru</span><span>Grow easy.</span></div></footer>;
}