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
    <div className="container">

      <h2 style={{ marginBottom: 28 }}>
        Produtos
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 24
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  )
}

export default List
