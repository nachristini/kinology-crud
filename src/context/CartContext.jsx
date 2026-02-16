import { createContext, useState } from "react"

export const CartContext = createContext({
  items: [],
  add: () => {},
  remove: () => {}
})

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function add(product) {
    setItems(prev => [...prev, product])
  }

  function remove(id) {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, add, remove }}>
      {children}
    </CartContext.Provider>
  )
}
