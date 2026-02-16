import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="fs-container hero-inner">
        <span className="hero-badge">
          ✨ Coleção Exclusiva
        </span>

        <h1>
          Descubra produtos
          <br />
          incríveis
        </h1>

        <p>
          Explore nossa curadoria de produtos selecionados com qualidade e
          estilo. De eletrônicos a moda, encontre tudo o que você precisa.
        </p>

        <div className="hero-actions">
          <Link to="/produtos" className="hero-btn-primary">
            Explorar Produtos →
          </Link>

          <Link to="/create" className="hero-btn-secondary">
            Criar Produto
          </Link>
        </div>
      </div>
    </section>
  );
}
