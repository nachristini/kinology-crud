import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { api } from "../api/api";

export default function Create() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  });

  function update(k, v) {
    setForm(s => ({ ...s, [k]: v }));
  }

  async function submit(e) {
    e.preventDefault();
    await api.post("/products", form);
    nav("/produtos");
  }

  return (
    <MainLayout>

      {/* breadcrumb */}
      <div className="fs-breadcrumb">
        <div className="fs-container">
          <Link to="/produtos">Produtos</Link>
          <span>›</span>
          <strong>Novo Produto</strong>
        </div>
      </div>

      {/* header */}
      <section className="fs-container create-header">
        <h1>Novo Produto</h1>
        <p>
          Preencha as informações abaixo para adicionar um novo produto ao catálogo.
        </p>
      </section>

      {/* card */}
      <section className="fs-container">
        <form className="create-card" onSubmit={submit}>

          <label>
            Título
            <input
              placeholder="Nome do produto"
              value={form.title}
              onChange={e => update("title", e.target.value)}
            />
          </label>

          <div className="create-row">
            <label>
              Preço ($)
              <input
                type="number"
                value={form.price}
                onChange={e => update("price", Number(e.target.value))}
              />
            </label>

            <label>
              Categoria
              <select
                value={form.category}
                onChange={e => update("category", e.target.value)}
              >
                <option value="">Selecione</option>
                <option>electronics</option>
                <option>jewelery</option>
                <option>men's clothing</option>
                <option>women's clothing</option>
              </select>
            </label>
          </div>

          <label>
            Descrição
            <textarea
              rows={4}
              placeholder="Descreva o produto..."
              value={form.description}
              onChange={e => update("description", e.target.value)}
            />
          </label>

          <label>
            URL da Imagem
            <input
              value={form.image}
              onChange={e => update("image", e.target.value)}
            />
          </label>

          <div className="create-actions">
            <button className="btn-primary" type="submit">
              Criar Produto
            </button>

            <button
              type="button"
              className="btn-ghost"
              onClick={() => nav(-1)}
            >
              Cancelar
            </button>
          </div>

        </form>
      </section>

    </MainLayout>
  );
}
