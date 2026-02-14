import { useParams, Link } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Loader from "../components/Loader"

function Details() {
  const { id } = useParams()

  const { product, loading, error } = useProduct(id)

  if (!id) return <p>id não informado</p>
  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  if (!product) return <p>produto não encontrado</p>

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 32,
        alignItems: "start"
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 12,
          padding: 24
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: 360, objectFit: "contain" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h1>{product.title}</h1>

        <span style={{ opacity: 0.7 }}>
          {product.category}
        </span>

        <strong style={{ fontSize: 22, color: "#6c63ff" }}>
          R$ {product.price.toFixed(2)}
        </strong>

        <p style={{ lineHeight: "22px" }}>
          {product.description}
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          <Link to={`/edit/${product.id}`}>
            <button>editar</button>
          </Link>

          <button style={{ background: "#ef4444", color: "white" }}>
            deletar
          </button>

          <Link to="/">
            <button>voltar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Details
