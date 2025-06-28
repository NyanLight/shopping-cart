import { useContext } from "react";
import styles from "./Payment.module.css";
import { ShopContext } from "../Wrapper/context";

export function Payment({ total }) {
  const { clearCart } = useContext(ShopContext);

  return (
    <div className={styles.payment}>
      <div className={styles.infoBlock}>
        <div>TOTAL</div>
        <div>{total.toFixed(2)}</div>
      </div>
      <div className={styles.btnBlock}>
        <button
          onClick={() => {
            clearCart();
            alert("Thank you for your shopping!");
          }}
        >
          Proceed to payment
        </button>
      </div>
    </div>
  );
}
