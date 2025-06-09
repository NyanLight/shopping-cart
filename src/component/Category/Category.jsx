import { Card } from "../Card/Card";
import { ShopContext } from "../Wrapper/context";
import styles from "./Category.module.css";
import { useEffect, useState, useContext } from "react";

export function Caterogy({ title }) {
  const context = useContext(ShopContext);
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

  if (!goods) return <div>Loading...</div>;
  if (error) return <div>We've got a problem! Error: {error}</div>;

  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {goods.map((good) => {
          {
            return (
              <Card
                id={good.id}
                image={good.image}
                key={good.id}
                price={good.price}
                title={good.title}
                clickHandler={() => {
                  context.add(good);
                }}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
