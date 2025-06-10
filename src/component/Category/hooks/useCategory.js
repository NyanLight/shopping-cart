import { useEffect, useState } from "react";

export function useCategory() {
    const [goods, setGoods] = useState(null);
      const [error, setError] = useState(null);
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
          })
          .then((data) => setGoods(data))
          .catch((err) => setError(err));
      }, []);

      return {goods, error};
    
}