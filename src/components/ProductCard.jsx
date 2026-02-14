import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#020617",
        padding: 16,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "0.2s",
        cursor: "pointer"
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: 140,
          objectFit: "contain",
          background: "white",
          borderRadius: 8,
          padding: 8
        }}
      />

      <h3
        style={{
          fontSize: 14,
          lineHeight: "18px",
          height: 54,
          overflow: "hidden"
        }}
      >
        {product.title}
      </h3>

      <strong style={{ color: "#6c63ff" }}>
        R$ {product.price.toFixed(2)}
      </strong>

      <Link to={`/item/${product.id}`}>
        <button>detalhes</button>
      </Link>
    </div>
  )
}

export default ProductCard
