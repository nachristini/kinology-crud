import { useEffect, useState } from "react"
import { api } from "../api/api"

export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    async function load() {
      try {
        const res = await api.get(`/products/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.error(error)
        setError("erro ao carregar produto")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])

  return { product, loading, error }
}
