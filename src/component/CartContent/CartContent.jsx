import { CartCard } from "../CartCard/CartCard";
import { Payment } from "../Payment/Payment";
import styles from "./CartContent.module.css";
import {goods} from '../../data/data.js';

export function CartContent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Cart</h2>
      <div className={styles.content}>
        <div className={styles.cards}>
            <CartCard id={goods[0].id} image={goods[0].image} price={goods[0].price} title={goods[0].title} key={goods[0].id} quantity={3} />
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </section>
  );
}
