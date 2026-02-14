import { Link } from "react-router-dom"

function MainLayout({ children }) {
  return (
    <div>
      <header
        style={{
          padding: 20,
          background: "#020617",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link to="/" style={{ color: "#6c63ff", fontWeight: "bold" }}>
          Kinology CRUD
        </Link>

        <Link to="/create">
          <button>Novo</button>
        </Link>
      </header>

      <main style={{ padding: 24 }}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
