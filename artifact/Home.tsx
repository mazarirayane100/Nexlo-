import { useState, useEffect } from "react";
import { ShoppingCart, X, Lock, ChevronDown, Menu } from "lucide-react";
import logoImg from "@assets/1777913504631_1777927958811.png";
import profileImg from "@assets/IMG_20260503_171708_709_1777928624010.jpg";
import {
  WhatsAppIcon,
  InstagramIcon,
  CameraIcon,
  VideoIcon,
  GlobeIcon,
  MonitorIcon,
  RocketIcon,
  TrendUpIcon,
  BrainIcon,
  LockIcon,
  BotIcon,
  AutomationIcon,
} from "@/components/Icons";

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
}

const SERVICES: Service[] = [
  { id: "img-starter", name: "Starter Pack — 5 Ad Images", price: 20, category: "Ad Images" },
  { id: "img-growth", name: "Growth Pack — Ad Images", price: 35, category: "Ad Images" },
  { id: "img-premium", name: "Premium Pack — Ad Images", price: 50, category: "Ad Images" },
  { id: "vid-short", name: "Short Product Video", price: 15, category: "Video Production" },
  { id: "vid-medium", name: "Medium Ad Video", price: 30, category: "Video Production" },
  { id: "vid-campaign", name: "Full Video Campaign", price: 40, category: "Video Production" },
  { id: "web-simple", name: "Simple Landing Page", price: 40, category: "Web Design" },
  { id: "web-optimized", name: "Optimized Landing Page", price: 60, category: "Web Design" },
  { id: "web-premium", name: "Premium Landing Page", price: 180, category: "Web Design" },
  { id: "pro-small", name: "Small Business Website", price: 220, category: "Professional Websites" },
  { id: "pro-full", name: "Full Professional Website", price: 300, category: "Professional Websites" },
  { id: "pro-store", name: "E-Commerce Store", price: 600, category: "Professional Websites" },
];

const BUNDLES = [
  {
    id: "bundle-start",
    name: "Quick Start Bundle",
    items: ["10 Ad Images", "3 Videos", "Landing Page"],
    price: 250,
    badge: "Most Popular",
  },
  {
    id: "bundle-growth",
    name: "Store Growth Bundle",
    items: ["20 Ad Images", "5 Videos", "Professional Website"],
    price: 450,
    badge: "Best Value",
  },
];

const AUTOMATION_CARDS = [
  { label: "Social Media Automation", Icon: AutomationIcon },
  { label: "Smart Bots", Icon: BotIcon },
  { label: "API Integration", Icon: BrainIcon },
];

const CATEGORIES = ["Ad Images", "Video Production", "Web Design", "Professional Websites"];

function CategoryIcon({ category, size = 28 }: { category: string; size?: number }) {
  const color = "currentColor";
  if (category === "Ad Images") return <CameraIcon size={size} color={color} />;
  if (category === "Video Production") return <VideoIcon size={size} color={color} />;
  if (category === "Web Design") return <GlobeIcon size={size} color={color} />;
  return <MonitorIcon size={size} color={color} />;
}

const INSTAGRAM_URL = "https://www.instagram.com/nexlo_ai?igsh=NGE0ZzNyenVwbGpw";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const addToCart = (item: CartItem) => {
    if (!cartItems.find((c) => c.id === item.id)) {
      setCartItems((prev) => [...prev, item]);
    }
    setAddedIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1500);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((c) => c.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const itemsList = cartItems.map((item) => `• ${item.name} - $${item.price}`).join("\n");
    const message = `Hello, I would like to order the following services:\n\n${itemsList}\n\nTotal: $${totalPrice}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/213791344694?text=${encoded}`, "_blank");
  };

  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    services: SERVICES.filter((s) => s.category === cat),
  }));

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#bundles", label: "Bundles" },
    { href: "#automation", label: "Automation" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground circuit-bg" dir="ltr">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 right-0 left-0 z-30 border-b border-[rgba(0,195,255,0.15)] bg-[rgba(5,10,20,0.88)] backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Nexlo Hub AI" className="h-9 w-9 object-contain" />
            <span className="neon-text font-display font-bold text-xl tracking-widest uppercase">
              Nexlo Hub AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-[rgba(210,230,255,0.75)] hover:text-[#00c3ff] transition-colors duration-200 tracking-wide"
                data-testid={`nav-link-${link.label}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(210,230,255,0.65)] hover:text-[#00c3ff] transition-colors"
              data-testid="nav-link-instagram"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative neon-btn px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-ui font-semibold"
              data-testid="button-cart-open"
            >
              <ShoppingCart size={17} strokeWidth={1.7} />
              <span className="hidden sm:inline">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00c3ff] text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              className="md:hidden neon-btn p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu size={20} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(0,195,255,0.15)] py-4 px-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-[rgba(210,230,255,0.8)] hover:text-[#00c3ff] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-ui text-sm text-[rgba(210,230,255,0.7)] hover:text-[#00c3ff] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <InstagramIcon size={16} /> Instagram
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 hero-glow overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(0,195,255,0.04)] blur-3xl" />
          <div className="absolute top-1/3 left-1/5 w-48 h-48 rounded-full bg-[rgba(0,100,200,0.05)] blur-2xl" />
          <div className="absolute top-1/3 right-1/5 w-48 h-48 rounded-full bg-[rgba(0,195,255,0.05)] blur-2xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="float-anim mb-8 inline-block pulse-glow-anim rounded-2xl">
            <img
              src={logoImg}
              alt="Nexlo Hub AI Logo"
              className="w-32 h-32 md:w-44 md:h-44 object-contain mx-auto drop-shadow-[0_0_35px_rgba(0,195,255,0.75)]"
              data-testid="img-hero-logo"
            />
          </div>

          <p className="font-display text-sm md:text-base font-semibold tracking-[0.35em] uppercase text-[#00c3ff] mb-4">
            NEXLO HUB AI
          </p>

          <h1
            className="font-heading text-3xl md:text-5xl lg:text-[3.6rem] font-black leading-[1.15] mb-6 text-white"
            data-testid="text-hero-title"
          >
            Transform Your Ideas Into<br />
            <span className="neon-text">Digital Projects</span><br />
            Powered by AI
          </h1>

          <p
            className="font-body text-base md:text-lg text-[rgba(180,210,240,0.82)] max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            We deliver design, video, website &amp; automation solutions
            to help you grow fast and professionally.
          </p>

          <a
            href="#services"
            className="neon-btn-primary px-10 py-4 rounded-xl font-ui font-bold text-base inline-block tracking-wide"
            data-testid="link-cta-start"
          >
            Get Started
          </a>

          <div className="mt-14 flex justify-center">
            <a href="#about" className="text-[rgba(0,195,255,0.5)] hover:text-[#00c3ff] transition-colors animate-bounce">
              <ChevronDown size={28} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,195,255,0.4)] to-transparent" />
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#00c3ff] mb-2">Who I Am</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white">About Me</h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#00c3ff] to-transparent" />
          </div>

          <div className="neon-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(0,195,255,0.03)] blur-3xl rounded-full" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

              {/* Circular Profile Photo */}
              <div className="shrink-0 relative">
                <div className="absolute -inset-1.5 rounded-full border border-[rgba(0,195,255,0.25)]" />
                <div className="absolute -inset-3 rounded-full border border-[rgba(0,195,255,0.1)]" />
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-[rgba(0,195,255,0.6)] overflow-hidden pulse-glow-anim shadow-[0_0_30px_rgba(0,195,255,0.3)]">
                  <img
                    src={profileImg}
                    alt="Nexlo Hub AI Owner"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center top" }}
                    data-testid="img-about-profile"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-heading text-white text-xl font-black mb-1 leading-snug">AI Content Creator</h3>
                <p className="font-display text-[#00c3ff] text-sm mb-4 font-semibold tracking-wider uppercase">Algeria 🇩🇿</p>
                <p className="font-body text-[rgba(210,230,255,0.85)] text-base md:text-lg leading-[1.85]" data-testid="text-about">
                  I am an AI-specialized content creator from Algeria with over 2 years of experience in the field.
                  I continuously develop my skills and strive to deliver smart, modern solutions that help individuals
                  and businesses grow using the latest AI technologies.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["2+ Years Experience", "AI Specialist", "Algeria 🇩🇿", "Modern Solutions"].map((tag) => (
                    <span key={tag} className="font-ui px-4 py-1.5 text-xs font-semibold rounded-full text-[#00c3ff] border border-[rgba(0,195,255,0.3)] bg-[rgba(0,195,255,0.07)] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 neon-btn px-5 py-2.5 rounded-lg font-ui text-sm font-semibold"
                    data-testid="link-instagram-about"
                  >
                    <InstagramIcon size={16} /> @nexlo_ai
                  </a>
                  <a
                    href="https://wa.me/213791344694"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 neon-btn px-5 py-2.5 rounded-lg font-ui text-sm font-semibold"
                    data-testid="link-whatsapp-about"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#00c3ff] mb-2">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white">Services</h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#00c3ff] to-transparent" />
          </div>

          {grouped.map((group) => (
            <div key={group.category} className="mb-16">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px flex-1 bg-gradient-to-r from-[rgba(0,195,255,0.35)] to-transparent" />
                <h3
                  className="font-heading text-lg font-bold text-[#00c3ff] whitespace-nowrap px-2 flex items-center gap-2"
                  data-testid={`text-category-${group.category}`}
                >
                  <span className="text-[#00c3ff]"><CategoryIcon category={group.category} size={20} /></span>
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-[rgba(0,195,255,0.35)] to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.services.map((service) => {
                  const inCart = !!cartItems.find((c) => c.id === service.id);
                  const justAdded = addedIds.has(service.id);
                  return (
                    <div
                      key={service.id}
                      className="neon-card rounded-xl p-6 flex flex-col justify-between group"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[rgba(0,195,255,0.08)] border border-[rgba(0,195,255,0.2)] flex items-center justify-center mb-4 text-[#00c3ff] group-hover:bg-[rgba(0,195,255,0.14)] transition-colors">
                          <CategoryIcon category={service.category} size={24} />
                        </div>
                        <h4 className="font-ui text-white font-semibold text-sm mb-3 leading-snug">{service.name}</h4>
                        <p className="font-display text-[#00c3ff] text-2xl font-black tracking-tight">${service.price}</p>
                      </div>
                      <button
                        className={`mt-5 w-full py-2.5 rounded-lg font-ui text-sm font-bold tracking-wide transition-all duration-300 ${
                          inCart
                            ? "bg-[rgba(0,195,255,0.12)] border border-[rgba(0,195,255,0.35)] text-[rgba(0,195,255,0.65)] cursor-default"
                            : justAdded
                            ? "bg-[rgba(0,255,150,0.15)] border border-[rgba(0,255,150,0.45)] text-[rgba(0,255,180,0.9)]"
                            : "neon-btn"
                        }`}
                        onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, category: service.category })}
                        disabled={inCart}
                        data-testid={`button-add-cart-${service.id}`}
                      >
                        {inCart ? "✓  In Cart" : justAdded ? "✓  Added!" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Automation — Locked ── */}
      <section id="automation" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#00c3ff] mb-2">Advanced Technology</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white flex items-center justify-center gap-3">
              <AutomationIcon size={32} className="text-[#00c3ff]" />
              Automation
            </h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#00c3ff] to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden neon-border" data-testid="section-automation-locked">
            <div className="locked-blur p-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {AUTOMATION_CARDS.map(({ label, Icon }) => (
                <div key={label} className="neon-card rounded-xl p-8 text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(0,195,255,0.08)] border border-[rgba(0,195,255,0.2)] flex items-center justify-center text-[#00c3ff]">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-ui text-white font-semibold text-base">{label}</h4>
                  <p className="font-body text-[rgba(180,200,240,0.6)] text-sm">Advanced business service</p>
                  <p className="font-display text-[#00c3ff] text-xl font-black">???</p>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(5,10,20,0.72)] backdrop-blur-sm">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[rgba(0,195,255,0.5)] flex items-center justify-center mx-auto mb-5 bg-[rgba(0,195,255,0.08)] pulse-glow-anim text-[#00c3ff]">
                  <LockIcon size={30} />
                </div>
                <h3 className="font-heading text-white text-2xl font-black mb-3">Coming Soon</h3>
                <p className="font-body text-[rgba(180,210,240,0.78)] text-base max-w-xs mx-auto leading-relaxed">
                  This service will be available very soon.
                </p>
                <div className="mt-5 px-6 py-2 rounded-full border border-[rgba(0,195,255,0.3)] text-[#00c3ff] font-ui text-sm font-semibold inline-flex items-center gap-2">
                  <Lock size={13} strokeWidth={2} /> Temporarily Locked
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bundles ── */}
      <section id="bundles" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#00c3ff] mb-2">Special Offers</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white">Bundles</h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#00c3ff] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUNDLES.map((bundle, idx) => {
              const inCart = !!cartItems.find((c) => c.id === bundle.id);
              const justAdded = addedIds.has(bundle.id);
              const BundleIcon = idx === 0 ? RocketIcon : TrendUpIcon;
              return (
                <div
                  key={bundle.id}
                  className="neon-card rounded-2xl p-8 relative overflow-hidden"
                  data-testid={`card-bundle-${bundle.id}`}
                >
                  <div className="absolute top-5 right-5">
                    <span className="font-ui bg-[rgba(0,195,255,0.12)] border border-[rgba(0,195,255,0.35)] text-[#00c3ff] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                      {bundle.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[rgba(0,195,255,0.08)] border border-[rgba(0,195,255,0.2)] flex items-center justify-center mb-5 text-[#00c3ff]">
                    <BundleIcon size={30} />
                  </div>

                  <h3 className="font-heading text-white text-xl font-black mb-5">{bundle.name}</h3>

                  <ul className="space-y-2.5 mb-7">
                    {bundle.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 font-body text-[rgba(200,225,255,0.82)] text-sm leading-relaxed">
                        <span className="text-[#00c3ff] shrink-0">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="2 7 6 11 12 3" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="font-display text-[#00c3ff] text-3xl font-black tracking-tight">${bundle.price}</p>
                    <button
                      className={`px-6 py-2.5 rounded-xl font-ui text-sm font-bold tracking-wide transition-all duration-300 ${
                        inCart
                          ? "bg-[rgba(0,195,255,0.12)] border border-[rgba(0,195,255,0.35)] text-[rgba(0,195,255,0.65)] cursor-default"
                          : justAdded
                          ? "bg-[rgba(0,255,150,0.15)] border border-[rgba(0,255,150,0.45)] text-[rgba(0,255,180,0.9)]"
                          : "neon-btn-primary"
                      }`}
                      onClick={() => addToCart({ id: bundle.id, name: bundle.name, price: bundle.price, category: "Bundles" })}
                      disabled={inCart}
                      data-testid={`button-add-cart-bundle-${bundle.id}`}
                    >
                      {inCart ? "✓  In Cart" : justAdded ? "✓  Added!" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[rgba(0,195,255,0.12)] py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="font-display neon-text font-bold tracking-widest uppercase text-sm">Nexlo Hub AI</span>
          </div>
          <p className="font-body text-[rgba(180,200,240,0.45)] text-sm text-center">
            © 2025 Nexlo Hub AI — All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn px-4 py-2 rounded-lg font-ui text-sm font-semibold flex items-center gap-2"
              data-testid="link-instagram-footer"
            >
              <InstagramIcon size={15} /> @nexlo_ai
            </a>
            <a
              href="https://wa.me/213791344694"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn px-4 py-2 rounded-lg font-ui text-sm font-semibold flex items-center gap-2"
              data-testid="link-whatsapp-footer"
            >
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* ── Floating Cart ── */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 z-30 neon-btn-primary w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        data-testid="button-floating-cart"
      >
        <ShoppingCart size={21} strokeWidth={1.8} />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -left-1 bg-white text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* ── Cart Sidebar ── */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} data-testid="overlay-cart" />
          <aside className="cart-sidebar" data-testid="sidebar-cart">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(0,195,255,0.18)]">
              <h2 className="font-heading text-white font-black text-lg flex items-center gap-2">
                <ShoppingCart size={18} strokeWidth={1.7} color="#00c3ff" />
                Your Cart
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-[rgba(180,200,240,0.6)] hover:text-white transition-colors"
                data-testid="button-cart-close"
              >
                <X size={21} strokeWidth={1.7} />
              </button>
            </div>

            <div className="px-5 py-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,195,255,0.07)] border border-[rgba(0,195,255,0.2)] flex items-center justify-center mx-auto mb-4 text-[rgba(0,195,255,0.4)]">
                    <ShoppingCart size={28} strokeWidth={1.5} />
                  </div>
                  <p className="font-ui text-[rgba(180,200,240,0.55)] text-sm font-semibold">Your cart is empty</p>
                  <p className="font-body text-[rgba(180,200,240,0.35)] text-xs mt-1">Add services to start your order</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="neon-card rounded-xl p-4 flex items-start justify-between gap-3"
                      data-testid={`cart-item-${item.id}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-ui text-white text-sm font-semibold leading-snug">{item.name}</p>
                        <p className="font-body text-[rgba(150,180,220,0.65)] text-xs mt-0.5">{item.category}</p>
                        <p className="font-display text-[#00c3ff] font-black mt-1.5">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[rgba(255,100,100,0.5)] hover:text-[rgba(255,100,100,1)] transition-colors shrink-0 mt-0.5"
                        data-testid={`button-remove-cart-${item.id}`}
                      >
                        <X size={15} strokeWidth={2} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="px-5 py-5 border-t border-[rgba(0,195,255,0.18)] mt-2">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-ui text-[rgba(180,200,240,0.75)] font-semibold text-sm tracking-wide">Total</span>
                  <span className="font-display neon-text text-2xl font-black" data-testid="text-cart-total">${totalPrice}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="neon-btn-primary w-full py-3.5 rounded-xl font-ui font-black text-sm tracking-wide flex items-center justify-center gap-2.5"
                  data-testid="button-checkout"
                >
                  <WhatsAppIcon size={18} /> Confirm Order via WhatsApp
                </button>
                <p className="font-body text-[rgba(150,180,220,0.45)] text-xs text-center mt-3">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  );
}
