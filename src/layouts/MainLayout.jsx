import { Link } from "react-router-dom"

function MainLayout({ children }) {
  return (
    <div>
      <header style={{
        padding: 20,
        background: "#020617",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Link to="/">Kinology CRUD</Link>
        <Link to="/create">Novo</Link>
      </header>

      <main style={{ padding: 24 }}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
