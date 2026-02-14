import { useEffect, useState } from "react"
import { api } from "../api/api"

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/products")
        setProducts(res.data)
      } catch (e) {
        setError("erro ao carregar produtos")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { products, loading, error }
}
