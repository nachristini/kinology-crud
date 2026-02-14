import { useParams, Link, useNavigate } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Loader from "../components/Loader"
import { api } from "../api/api"

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { product, loading, error } = useProduct(id)

  async function handleDelete() {
    const ok = confirm("deseja deletar este produto?")
    if (!ok) return

    try {
      await api.delete(`/products/${id}`)
      navigate("/")
    } catch {
      alert("erro ao deletar produto")
    }
  }

  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  if (!product) return <p>produto não encontrado</p>

  return (
    <div className="container">

      <div className="card">

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32
        }}>

          {/* imagem */}

          <div className="img-box" style={{ height: 360 }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxHeight: "100%",
                objectFit: "contain"
              }}
            />
          </div>

          {/* infos */}

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>

            <h1 style={{ fontSize: 22 }}>
              {product.title}
            </h1>

            <span style={{
              background: "#1f2a44",
              padding: "6px 10px",
              borderRadius: 999,
              width: "fit-content",
              fontSize: 13
            }}>
              {product.category}
            </span>

            <strong style={{ fontSize: 24 }}>
              R$ {Number(product.price).toFixed(2)}
            </strong>

            <p style={{ lineHeight: "22px" }}>
              {product.description}
            </p>

            {/* ações */}

            <div style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 10
            }}>

              <Link to={`/edit/${product.id}`}>
                <button>
                  editar
                </button>
              </Link>

              <button
                onClick={handleDelete}
                style={{
                  background: "#ef4444"
                }}
              >
                deletar
              </button>

              <Link to="/">
                <button>
                  voltar
                </button>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Details
