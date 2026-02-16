import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Details from "./pages/Details";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/produtos" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
