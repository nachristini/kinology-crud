import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { api } from "../api/api";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    load();
  }, [id]);

  async function load() {
    const { data } = await api.get(`/products/${id}`);

    setForm({
      title: data.title || "",
      price: data.price || "",
      description: data.description || "",
      image: data.image || "",
      category: data.category || ""
    });
  }

  function handleChange(e) {
    setForm(s => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMsg(null);

      await api.put(`/products/${id}`, {
        ...form,
        price: Number(form.price)
      });

      navigate(`/details/${id}`);

    } catch {
      setErrorMsg("erro ao salvar alterações");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>

      {/* breadcrumb FUNCIONAL */}
      <div className="fs-breadcrumb">
        <div className="fs-container">
          <Link to="/produtos">Produtos</Link>
          <span>›</span>

          <Link to={`/details/${id}`}>
            Produto
          </Link>

          <span>›</span>
          <strong>Editar</strong>
        </div>
      </div>

      {/* header */}
      <section className="fs-container create-header">
        <h1>Editar Produto</h1>
        <p>Atualize as informações do produto abaixo.</p>
      </section>

      {/* card */}
      <section className="fs-container">
        <form className="create-card" onSubmit={handleSubmit}>

          <label>
            Título
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>

          <div className="create-row">

            <label>
              Preço ($)
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
              />
            </label>

            <label>
              Categoria
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </label>

          </div>

          <label>
            Descrição
            <textarea
              name="description"
              rows={5}
              value={form.description}
              onChange={handleChange}
            />
          </label>

          <label>
            URL da Imagem
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </label>

          {errorMsg && (
            <div style={{ color: "#dc2626" }}>
              {errorMsg}
            </div>
          )}

          <div className="create-actions">

            <button
              className="btn-primary"
              disabled={loading}
              type="submit"
            >
              {loading ? "Salvando..." : "Salvar Alterações"}
            </button>

            <button
              type="button"
              className="btn-ghost"
              onClick={() => navigate(-1)}
            >
              Cancelar
            </button>

          </div>

        </form>
      </section>

    </MainLayout>
  );
}
