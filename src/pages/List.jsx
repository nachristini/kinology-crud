import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";

export default function List() {
  const [search, setSearch] = useState("");
  const { data: products = [], loading } = useProducts(search, "all");

  return (
    <MainLayout>
      <Hero />
      <StatsBar />

      <section className="fs-container products-section">

        <div className="products-header">
          <div className="products-header-left">
            <h2>Nossos Produtos</h2>
            <span className="products-count">
              {products.length} produtos disponíveis
            </span>
          </div>

          {/* usa o componente correto — sem emoji */}
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="chips-row">
          <button className="chip chip-active">Todos</button>
          <button className="chip">Electronics</button>
          <button className="chip">Jewelry</button>
          <button className="chip">Men's Clothing</button>
          <button className="chip">Women's Clothing</button>
        </div>

        {loading && <p>Carregando...</p>}

        {!loading && (
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}
