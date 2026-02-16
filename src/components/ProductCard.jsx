import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const nav = useNavigate();

  const rate = product.rating?.rate ?? 0;
  const count = product.rating?.count ?? 0;

  return (
    <div
      className="product-card"
      onClick={() => nav(`/produtos/${product.id}`)}
    >
      <span className="product-badge">
        {product.category}
      </span>

      <div className="product-image-wrap">

        {/* overlay */}
        <div className="product-overlay">
          <button
            className="overlay-btn"
            onClick={(e) => {
              e.stopPropagation();
              nav(`/produtos/${product.id}`);
            }}
          >
            👁 Ver detalhes
          </button>
        </div>

        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>

        <div className="product-bottom">
          <strong className="product-price">
            ${product.price.toFixed(2)}
          </strong>

          <div className="product-rating">
            <svg viewBox="0 0 24 24">
              <path d="M12 17.3l-5.2 3 1-5.8-4.2-4.1 5.8-.8L12 4l2.6 5.6 5.8.8-4.2 4.1 1 5.8z" />
            </svg>
            <span>{rate.toFixed(1)}</span>
            <small>({count})</small>
          </div>
        </div>
      </div>
    </div>
  );
}
