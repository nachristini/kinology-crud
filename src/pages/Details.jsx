import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { api } from "../api/api";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  const [deleteMsg, setDeleteMsg] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // ✅ FUNÇÃO VEM PRIMEIRO
  async function loadProduct() {
    try {
      setLoading(true);

      const { data } = await api.get(`/products/${id}`);
      setProduct(data);

      const { data: sameCategory } = await api.get(
        `/products/category/${encodeURIComponent(data.category)}`
      );

      const filtered = sameCategory
        .filter(p => p.id !== data.id)
        .slice(0, 4);

      setSimilar(filtered);

    } finally {
      setLoading(false);
    }
  }

  // ✅ useEffect DEPOIS
  useEffect(() => {
    loadProduct();
  }, [id]);

  async function handleDelete() {
    try {
      setDeleting(true);

      await api.delete(`/products/${id}`);

      setDeleteMsg("produto excluído com sucesso");

      setTimeout(() => {
        navigate("/produtos");
      }, 1400);

    } catch {
      setDeleteMsg("erro ao excluir produto");
      setDeleting(false);
    }
  }

  if (loading || !product) {
    return (
      <MainLayout>
        <div className="fs-container">Carregando...</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {deleteMsg && (
        <div className="toast-success">
          {deleteMsg}
        </div>
      )}

      <section className="fs-container details-grid">

        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">

          <span className="product-badge">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="details-price">
            ${product.price.toFixed(2)}
            <span className="stock">Em estoque</span>
          </div>

          <p className="details-desc">
            {product.description}
          </p>

          <div className="details-actions">
            <button className="btn-primary">
              🛒 Adicionar ao Carrinho
            </button>

            <button className="icon-btn">❤️</button>
            <button className="icon-btn">🔗</button>
          </div>

          <div className="details-admin">
            <button
              className="btn-ghost"
              onClick={() => navigate(`/edit/${product.id}`)}
            >
              ✏️ Editar Produto
            </button>

            <button
              className="btn-danger"
              disabled={deleting}
              onClick={handleDelete}
            >
              {deleting ? "Excluindo..." : "🗑 Excluir"}
            </button>
          </div>

        </div>
      </section>

      {similar.length > 0 && (
        <section className="fs-container similar-section">
          <div className="similar-header">
            <h2>Produtos similares</h2>
            <span>mesma categoria</span>
          </div>

          <div className="products-grid">
            {similar.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </MainLayout>
  );
}
