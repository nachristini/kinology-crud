import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

import List from "./pages/List"
import Details from "./pages/Details"
import Create from "./pages/Create"
import Edit from "./pages/Edit"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/item/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </MainLayout>
  )
}

export default App
