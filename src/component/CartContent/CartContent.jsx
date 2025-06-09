import { CartCard } from "../CartCard/CartCard";
import { Payment } from "../Payment/Payment";
import { ShopContext } from "../Wrapper/context";
import styles from "./CartContent.module.css";
import { useContext } from "react";

export function CartContent() {
  const { cart, add, del, clear } = useContext(ShopContext);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Cart</h2>
      <div className={styles.content}>
        <div className={styles.cards}>
          {cart.map((item) => (
            <CartCard
              id={item.product.id}
              image={item.product.image}
              price={item.product.price}
              title={item.product.title}
              key={item.product.id}
              quantity={item.quantity}
              handleDel={() => del(item.product.id)}
              handleClear={() => clear(item.product.id)}
              handleAdd={() => add(item.product)}
            />
          ))}
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </section>
  );
}
