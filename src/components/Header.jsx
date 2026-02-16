import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogoClick() {
    const isHome =
      location.pathname === "/" ||
      location.pathname === "/produtos";

    if (!isHome) {
      navigate("/produtos");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // ===== BOTÃO PRODUTOS COM SCROLL =====

  function goProdutos() {
    const isProdutosPage =
      location.pathname === "/" ||
      location.pathname === "/produtos";

    if (!isProdutosPage) {
      navigate("/produtos");

      setTimeout(() => {
        document
          .getElementById("produtos")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 220);

      return;
    }

    document
      .getElementById("produtos")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fs-header">
      <div className="fs-container fs-header-inner">

        {/* LOGO */}
        <div
          className="fs-logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <div className="fs-logo-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 7h12l-1 12H7L6 7Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 7a3 3 0 0 1 6 0"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="fs-logo-text">
            <span className="fs-brand">FakeStore</span>
            <span className="fs-sub">E-COMMERCE</span>
          </div>
        </div>

        {/* DIREITA */}
        <nav className="fs-nav">

          {/* PRODUTOS COM SCROLL */}
          <button
            onClick={goProdutos}
            className="fs-link"
            style={{ background: "none", border: 0, cursor: "pointer" }}
          >
            Produtos
          </button>

          <Link to="/create" className="fs-btn">
            + Novo Produto
          </Link>

        </nav>

      </div>
    </header>
  );
}
