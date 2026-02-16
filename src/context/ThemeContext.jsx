import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext({
  dark: false,
  toggle: () => {}
})

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light"
  }, [dark])

  function toggle() {
    setDark(v => !v)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
