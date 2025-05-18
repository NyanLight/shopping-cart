import { Card } from "../Card/Card";
import styles from "./Category.module.css";

export function Caterogy({ title, goods }) {
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {goods.map((good) => {
          if (good.category === title.toLowerCase()) {
            return (
              <Card
                id={good.id}
                image={good.image}
                key={good.id}
                price={good.price}
                title={good.title}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
