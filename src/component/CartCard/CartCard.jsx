import styles from "./CartCard.module.css";
import binIcon from "../../assets/bin.svg";

export function CartCard({
  title,
  price,
  image,
  quantity,
  handleAdd,
  handleDel,
  handleClear,
}) {
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={image} />
        </div>
        <div className={styles.quantityWrapper}>
          <button className={styles.sign} onClick={handleDel}>
            –
          </button>
          <div>{quantity}</div>
          <button className={styles.sign} onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div className={styles.rightPart}>
        <div>
          <img onClick={handleClear} src={binIcon} />
        </div>
        <div className={styles.totalPrice}>{(price * quantity).toFixed(2)}</div>
      </div>
    </article>
  );
}
