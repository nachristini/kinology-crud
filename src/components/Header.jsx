import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fs-header">
      <div className="fs-container fs-header-inner">
        {/* logo */}
        <div className="fs-logo">
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

        {/* direita */}
        <nav className="fs-nav">
          <Link to="/produtos" className="fs-link">
            Produtos
          </Link>

          <Link to="/create" className="fs-btn">
            + Novo Produto
          </Link>
        </nav>
      </div>
    </header>
  );
}
