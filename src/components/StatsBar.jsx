export default function StatsBar() {
  return (
    <section className="stats">
      <div className="fs-container stats-grid">

        {/* Entrega */}
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 7h11v8H3z" />
              <path d="M14 10h4l3 3v2h-7z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
          </div>
          <div>
            <strong>Entrega Rápida</strong>
            
            <span>Frete grátis acima de $50</span>
          </div>
        </div>

        {/* Escudo */}
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7z" />
            </svg>
          </div>
          <div>
            <strong>Compra Segura</strong>
            <span>Pagamento protegido</span>
          </div>
        </div>

        {/* Gráfico */}
        <div className="stat-card">
          <div className="stat-icon">
           <svg viewBox="0 0 24 24">
            <path d="M7 17L17 7" />
             <path d="M9 7h8v8" />
               </svg>
        </div>
        <div className="stat-text">
         <strong>Melhor Preço</strong>
          <span>Garantia de preço baixo</span>
        </div>
      </div>

        {/* Caixa */}
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 7l9-4 9 4-9 4z" />
              <path d="M3 7v10l9 4 9-4V7" />
            </svg>
          </div>
          <div>
            <strong>Devoluções</strong>
            <span>30 dias para troca</span>
          </div>
        </div>

      </div>
    </section>
  );
}
