# 🛍️ FakeStore — CRUD E-commerce em React

Aplicação de e-commerce moderna construída em React com foco em UX, UI e arquitetura de front-end. O projeto implementa um fluxo completo de listagem, criação, edição, visualização e exclusão de produtos, com componentes reutilizáveis, design system leve e organização escalável.

A proposta foi simular um front de loja real, mas com estrutura limpa o suficiente para servir como base de portfólio e evolução futura.

---

# 📦 Visão Geral

O FakeStore é um CRUD completo de produtos com:

- Listagem em grid responsivo
- Busca em tempo real
- Filtros por categoria
- Página de detalhes
- Produtos similares
- Criação e edição de produto
- Exclusão com feedback visual
- Skeleton loading
- Sistema de favoritos
- Carrinho fake
- Layout padronizado
- Design consistente de cards

Tudo isso consumindo API externa + camada de abstração local.

---

# 🧠 Objetivos do Projeto

- Demonstrar domínio de **React moderno**
- Aplicar **boas práticas de componentização**
- Criar **UI consistente e reutilizável**
- Simular fluxo real de e-commerce
- Trabalhar **estado global** sem libs pesadas
- Organizar arquitetura pensando em escala
- Criar base sólida para portfólio técnico

---

# 🛠️ Tecnologias Utilizadas

## Core

- React 18
- Vite
- JavaScript (ES6+)
- CSS Global estruturado

## Roteamento

- React Router DOM

## Requisições HTTP

- Axios

## Estado Global

- Context API
- Custom Hooks

## Dados

- FakeStore API
- MockAPI (para operações CRUD simuladas)

---

# 🧩 Arquitetura de Pastas
src/
├── api/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── styles/
└── main.jsx

## components/

Componentes reutilizáveis:

- ProductCard
- Header
- Footer
- Hero
- StatsBar
- Pagination
- SearchBar
- SkeletonCard
- Loader
- Button

## pages/

Páginas de rota:

- List — listagem de produtos
- Details — página de detalhes + similares
- Create — criação
- Edit — edição

## context/

Estado global isolado:

- CartContext
- FavoritesContext
- ThemeContext

## hooks/

Hooks customizados:

- useProducts
- useCart
- useFavorites
- useTheme

---

# 🎨 Decisões de UI / UX

## Product Cards padronizados

Problema resolvido:

- Títulos com tamanhos diferentes quebravam layout
- Imagens com proporções irregulares

Soluções aplicadas:

- clamp de 2 linhas no título
- altura fixa da área de imagem
- object-fit: contain
- preço + rating ancorados no rodapé do card

Resultado:

Layout visualmente estável mesmo com dados imprevisíveis.

---

## Footer Minimalista

Redução proposital de ruído visual:

- marca
- tagline curta
- copyright

---

## Stats Bar

Cards de benefícios com:

- alinhamento vertical fixo
- subtítulo ancorado
- layout consistente

---

## Página de Detalhes

Inclui:

- imagem ampliada
- categoria
- descrição
- ações
- edição / exclusão
- seção de **produtos similares** por categoria

---

# 🔎 Funcionalidades Implementadas

## Listagem

- grid responsivo
- paginação
- busca em tempo real
- filtro por categoria
- skeleton loading

## Detalhes

- visual completo
- similares automáticos
- ações de admin

## CRUD

- criar produto
- editar produto
- excluir produto
- feedback visual de exclusão (toast)

## Extras

- favoritos
- carrinho fake
- dark/light mode

---

# ⚙️ Como Rodar o Projeto

```bash
npm install
npm run dev
