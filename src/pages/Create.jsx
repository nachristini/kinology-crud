import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/api"

function Create() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function validate() {
    if (!form.title.trim()) return "título é obrigatório"
    if (!form.price) return "preço é obrigatório"
    if (!form.description.trim()) return "descrição é obrigatória"
    if (!form.image.trim()) return "url da imagem é obrigatória"
    if (!form.category.trim()) return "categoria é obrigatória"
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setLoading(true)
      setError(null)

      await api.post("/products", {
        ...form,
        price: Number(form.price)
      })

      setSuccess(true)

      // volta pra lista depois de 1.2s
      setTimeout(() => {
        navigate("/")
      }, 1200)

    } catch (err) {
      console.error(err)
      setError("erro ao criar produto")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>Novo Produto</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="título"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="preço"
          type="number"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="url da imagem"
          value={form.image}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="categoria"
          value={form.category}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="descrição"
          rows={4}
          value={form.description}
          onChange={handleChange}
        />

        {/* erro */}
        {error && (
          <div style={{
            background: "#7f1d1d",
            padding: 10,
            borderRadius: 8
          }}>
            {error}
          </div>
        )}

        {/* sucesso */}
        {success && (
          <div style={{
            background: "#064e3b",
            padding: 10,
            borderRadius: 8
          }}>
            produto criado com sucesso ✓
          </div>
        )}

        <button disabled={loading || success}>
          {loading ? "salvando..." : success ? "criado ✓" : "criar produto"}
        </button>

      </form>
    </div>
  )
}

export default Create
