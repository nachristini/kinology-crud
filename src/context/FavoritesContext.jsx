import { createContext, useState } from "react"

export const FavoritesContext = createContext({
  items: [],
  toggle: () => {},
  isFavorite: () => false
})

export function FavoritesProvider({ children }) {
  const [items, setItems] = useState([])

  function toggle(product) {
    setItems(prev => {
      const exists = prev.find(p => p.id === product.id)

      if (exists) {
        return prev.filter(p => p.id !== product.id)
      }

      return [...prev, product]
    })
  }

  function isFavorite(id) {
    return items.some(p => p.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ items, toggle, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
