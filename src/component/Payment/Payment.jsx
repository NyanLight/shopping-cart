import styles from "./Payment.module.css";

export function Payment() {
    return (
  <div className={styles.payment}>
    <div className={styles.infoBlock}>
        <div>TOTAL</div>
        <div>$1000</div>
    </div>
    <div className={styles.btnBlock}>
        <button onClick={() => alert('Thank you for your shopping!')}>Proceed to payment</button>
    </div>
  </div>
    )
}
