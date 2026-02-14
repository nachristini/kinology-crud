import { useProducts } from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import Loader from "../components/Loader"
import Empty from "../components/Empty"

function List() {
  const { products, loading, error } = useProducts()

  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  if (!products.length) return <Empty />

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>
        Produtos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20
        }}
      >
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default List
