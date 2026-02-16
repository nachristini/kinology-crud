import React from "react"

export default function Footer() {
  return (
    <footer className="footer fade-in">
      <div className="container footer-grid">

        <div>
          <h3>🛍 NexaStore</h3>
          <p>
            Plataforma de e-commerce moderna construída em React.
            Projeto CRUD com foco pesado em UX, UI e arquitetura de front.
          </p>
        </div>

        <div>
          <h4>Tecnologias</h4>
          <ul>
            <li>React 18</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>Axios</li>
            <li>MockAPI</li>
            <li>Context API</li>
          </ul>
        </div>

        <div>
          <h4>Funcionalidades</h4>
          <ul>
            <li>CRUD completo</li>
            <li>Busca em tempo real</li>
            <li>Favoritos ❤️</li>
            <li>Carrinho fake 🛒</li>
            <li>Paginação</li>
            <li>Dark / Light mode</li>
          </ul>
        </div>

        <div>
          <h4>Extras de Qualidade</h4>
          <ul>
            <li>Design system</li>
            <li>Skeleton loading</li>
            <li>Animações UI</li>
            <li>Componentização</li>
            <li>Arquitetura escalável</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NexaStore — Frontend avançado
      </div>
    </footer>
  )
}
