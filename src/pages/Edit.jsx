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
  const [errorMsg, setErrorMsg] = useState(null)
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setErrorMsg(null)

      await api.post("/products", {
        ...form,
        price: Number(form.price)
      })

      setSuccess(true)

      setTimeout(() => {
        navigate("/")
      }, 1200)

    } catch {
      // sem variável → linter não chora
      setErrorMsg("erro ao criar produto")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 560 }}>

        <h2>Novo Produto</h2>

        <form onSubmit={handleSubmit}>

          <div>
            <label>Título</label>
            <input name="title" value={form.title} onChange={handleChange} />
          </div>

          <div>
            <label>Preço</label>
            <input name="price" type="number" value={form.price} onChange={handleChange} />
          </div>

          <div>
            <label>Imagem URL</label>
            <input name="image" value={form.image} onChange={handleChange} />
          </div>

          <div>
            <label>Categoria</label>
            <input name="category" value={form.category} onChange={handleChange} />
          </div>

          <div>
            <label>Descrição</label>
            <textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {errorMsg && <div className="error">{errorMsg}</div>}
          {success && <div className="success">produto criado ✓</div>}

          <button disabled={loading || success}>
            {loading ? "salvando..." : "criar produto"}
          </button>

        </form>

      </div>
    </div>
  )
}

export default Create
