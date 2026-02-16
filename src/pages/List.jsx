import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import { useProducts } from "../hooks/useProducts";

const CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelry", value: "jewelery" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
];

export default function List() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const location = useLocation();
  const { hash } = location;

  const { data: products = [], loading } = useProducts(search, category);

  // ===== scroll para seção produtos via âncora =====

  useEffect(() => {
    if (!hash) return;

    if (hash === "#produtos") {
      // tenta múltiplas vezes porque hero + stats podem atrasar layout
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById("produtos");

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempt < 5) {
          setTimeout(() => tryScroll(attempt + 1), 120);
        }
      };

      tryScroll();
    }
  }, [hash]);

  // ===== render =====

  return (
    <MainLayout>
      <Hero />
      <StatsBar />

      <section id="produtos" className="fs-container products-section">

        <div className="products-header">
          <div className="products-header-left">
            <h2>Nossos Produtos</h2>
            <span className="products-count">
              {products.length} produtos disponíveis
            </span>
          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="chips-row">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={
                category === c.value
                  ? "chip chip-active"
                  : "chip"
              }
            >
              {c.label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="products-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {!loading && (
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
              />
            ))}
          </div>
        )}

      </section>
    </MainLayout>
  );
}
