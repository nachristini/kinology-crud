import { Link } from "react-router-dom";

export default function Hero() {
  function goToProducts(e) {
    e.preventDefault();

    const el = document.getElementById("produtos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

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

          {/* botão com scroll real */}
          <a href="#produtos" onClick={goToProducts} className="hero-btn-primary">
            Explorar Produtos →
          </a>

          <Link to="/create" className="hero-btn-secondary">
            Criar Produto
          </Link>

        </div>
      </div>
    </section>
  );
}
