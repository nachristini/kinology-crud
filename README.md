# 🛍️ FakeStore — React CRUD E-commerce

Aplicação de e-commerce construída em **React** com foco em arquitetura de front-end, componentização e experiência do usuário. O projeto implementa um **CRUD completo de produtos** consumindo APIs REST externas, com interface consistente, estado global leve e organização escalável de código.

A proposta foi ir além de um CRUD básico e simular um front real de loja digital, mantendo estrutura limpa, reutilizável e preparada para evolução futura e uso em portfólio técnico.

---

# 🚀 Objetivo do Projeto

Este projeto foi desenvolvido para atender ao desafio de **Frontend React CRUD**, demonstrando na prática:

- Consumo de APIs REST
- Estruturação de aplicação React escalável
- Separação clara de responsabilidades
- Componentização reutilizável
- Gerenciamento de estado sem bibliotecas pesadas
- Roteamento completo
- Tratamento de estados de carregamento e feedback visual
- Decisões de UI/UX consistentes

Mais do que cumprir requisitos, o foco foi entregar organização, previsibilidade visual e qualidade de arquitetura.

---

# 📦 Visão Geral da Aplicação

O FakeStore implementa um fluxo completo de e-commerce com operações CRUD:

## ✅ Leitura (Read)

- Listagem de produtos em grid responsivo  
- Busca em tempo real  
- Filtro por categoria  
- Paginação  
- Skeleton loading  
- Cards padronizados  

## 🔍 Detalhes

- Página de detalhes por rota dinâmica  
- Visual completo do produto  
- Produtos similares por categoria  
- Ações administrativas  

## ➕ Criação (Create)

- Formulário de criação de produto  
- Integração com API de mock CRUD  
- Atualização imediata de interface  

## ✏️ Edição (Update)

- Formulário de edição pré-preenchido  
- Atualização de dados  
- Sincronização de estado local  

## 🗑️ Exclusão (Delete)

- Remoção de produto  
- Feedback visual (toast)  
- Atualização de listagem sem reload  

---

# 🧠 Diferenciais Implementados

Além dos requisitos do desafio, o projeto inclui:

- Sistema de favoritos  
- Carrinho fake    
- Produtos similares automáticos  
- Layout system padronizado  
- Skeleton cards de carregamento  
- Hooks customizados  
- Camada de abstração de API  
- Contextos separados por domínio  
- Estrutura preparada para escala  

---

# 🛠️ Stack Tecnológica

## Core

- React 18  
- Vite  
- JavaScript ES6+  
- CSS global estruturado  

## Roteamento

- React Router DOM  

## Comunicação HTTP

- Axios  

## Estado Global

- Context API  
- Custom Hooks  

## Dados

- FakeStore API — catálogo e listagem  
- MockAPI — operações CRUD simuladas  

---

# 🧩 Arquitetura de Pastas

Organização pensada para crescimento e manutenção:

```bash
src/
├── api/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── styles/
└── main.jsx
```

---

# 🧱 Componentes Reutilizáveis

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

Todos desenvolvidos com foco em reutilização, previsibilidade visual e baixo acoplamento.

---

# 🎨 Decisões de UI / UX

## 📦 Padronização de Product Cards

APIs públicas possuem dados imprevisíveis que quebram layout. Para garantir consistência:

- Clamp de 2 linhas no título  
- Altura fixa da área de imagem  
- object-fit: contain  
- Preço e rating ancorados no rodapé  
- Estrutura de card estável  

Resultado: grid consistente independentemente do conteúdo retornado.

## 🧱 Layout Consistente

- Sistema de cards reutilizado em múltiplas telas  
- Espaçamentos padronizados  
- Footer minimalista com baixo ruído visual  
- Stats bar com alinhamento fixo  
- Hierarquia visual clara  

---

# 🔎 Funcionalidades Técnicas

## Listagem

- Grid responsivo  
- Busca em tempo real  
- Filtro por categoria  
- Paginação  
- Skeleton loading  

## Detalhes

- Rota dinâmica `/product/:id`  
- Produtos similares automáticos  
- Ações de edição e exclusão  

## CRUD

- Create com formulário validado  
- Update com dados pré-carregados  
- Delete com feedback visual  

## Estado Global

Contexts separados por domínio:

- CartContext  
- FavoritesContext  
- ThemeContext  

---

# 🪝 Hooks Customizados

- useProducts  
- useCart  
- useFavorites  
- useTheme  

Hooks encapsulam regras de negócio e reduzem lógica dentro de componentes de UI.

---

# 🧪 Cobertura dos Critérios do Desafio

| Critério | Status |
|----------|----------|
CRUD completo | ✅ |
Consumo de API REST | ✅ |
Roteamento dinâmico | ✅ |
Organização de código | ✅ |
Componentização | ✅ |
Estado global | ✅ |
Loading e feedback visual | ✅ |
UI consistente | ✅ |
Boas práticas | ✅ |

---

# ⚙️ Como Rodar o Projeto

```bash
npm install
npm run dev
```

Servidor local iniciado via Vite.
