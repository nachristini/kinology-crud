import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useProducts(search, category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const res = await api.get("/products");
      let list = res.data;

      if (search) {
        const s = search.toLowerCase();
        list = list.filter(p =>
          p.title.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.category.toLowerCase().includes(s)
        );
      }

      if (category && category !== "all") {
        list = list.filter(p => p.category === category);
      }

      setData(list);
      setLoading(false);
    }

    load();
  }, [search, category]);

  return { data, loading };
}
