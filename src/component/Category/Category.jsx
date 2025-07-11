import { Card } from "../Card/Card";
import { ShopContext } from "../Wrapper/context";
import styles from "./Category.module.css";
import { useContext } from "react";
import { useCategory } from "./hooks/useCategory.js";
import { Loading } from "../Loading/Loading.jsx";

export function Caterogy({ title }) {
  const {add} = useContext(ShopContext);
  const { goods, error } = useCategory();

  if (!goods) return <Loading />;
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
                  add(good);
                }}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
