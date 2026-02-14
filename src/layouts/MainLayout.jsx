import { Link } from "react-router-dom"

function MainLayout({ children }) {
  return (
    <div>

      <header className="card" style={{ margin: 20 }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link to="/">
            <strong>Kinology CRUD</strong>
          </Link>

          <Link to="/create">
            <button>Novo produto</button>
          </Link>
        </div>
      </header>

      <main style={{ padding: 20 }}>
        {children}
      </main>

    </div>
  )
}

export default MainLayout
