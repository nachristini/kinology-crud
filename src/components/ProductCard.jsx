import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div className="card card-hover">

      <div className="img-box" style={{ height: 160 }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "100%", objectFit: "contain" }}
        />
      </div>

      <h3 style={{
        marginTop: 12,
        fontSize: 15,
        lineHeight: "20px",
        height: 40,
        overflow: "hidden"
      }}>
        {product.title}
      </h3>

      <strong style={{ marginTop: 6 }}>
        R$ {product.price.toFixed(2)}
      </strong>

      <Link to={`/item/${product.id}`}>
        <button style={{ width: "100%", marginTop: 12 }}>
          detalhes
        </button>
      </Link>

    </div>
  )
}

export default ProductCard
