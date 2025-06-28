import { CartCard } from "../CartCard/CartCard";
import { Payment } from "../Payment/Payment";
import { ShopContext } from "../Wrapper/context";
import styles from "./CartContent.module.css";
import { useContext } from "react";

export function CartContent() {
  const { cart, add, del, clearItem} = useContext(ShopContext);
  const total = cart.reduce((prev, curr) => prev + (curr.product.price * curr.quantity), 0);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Cart</h2>
      <div className={styles.content}>
        <div className={styles.cards}>
          {cart.map((item) => (
            <CartCard
              id={item.product.id}
              image={item.product.image}
              price={(item.product.price).toFixed(2)}
              title={item.product.title}
              key={item.product.id}
              quantity={item.quantity}
              handleDel={() => del(item.product.id)}
              handleClear={() => clearItem(item.product.id)}
              handleAdd={() => add(item.product)}
            />
          ))}
        </div>
        <div>
          <Payment total={total}  />
        </div>
      </div>
    </section>
  );
}
