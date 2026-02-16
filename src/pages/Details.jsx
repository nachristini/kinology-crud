import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useProduct } from "../hooks/useProduct";

export default function Details() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);

  if (loading) return <MainLayout>Carregando...</MainLayout>;
  if (!product) return <MainLayout>Produto não encontrado</MainLayout>;

  function msg(t) {
    alert(t);
  }

  return (
    <MainLayout>
      <section className="fs-container details-grid">

        <div className="details-image">
          <img src={product.image} />
        </div>

        <div className="details-info">

          <span className="product-badge">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="details-rating">
            ⭐ {product.rating?.rate} ({product.rating?.count})
          </div>

          <div className="details-price">
            ${product.price}
            <span className="stock">Em estoque</span>
          </div>

          <p className="details-desc">
            {product.description}
          </p>

          {/* ações */}
          <div className="details-actions">

            <button
              className="btn-primary"
              onClick={() => msg("Produto adicionado ao carrinho")}
            >
              🛒 Adicionar ao Carrinho
            </button>

            <button onClick={() => msg("Favoritado")}>
              ❤️
            </button>

            <button onClick={() => msg("Link compartilhado")}>
              🔗
            </button>
          </div>

          <div className="details-admin">

            <button
              className="btn-ghost"
              onClick={() => msg("Editar produto")}
            >
              ✏️ Editar Produto
            </button>

            <button
              className="btn-danger"
              onClick={() => msg("Produto excluído")}
            >
              🗑 Excluir
            </button>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}
