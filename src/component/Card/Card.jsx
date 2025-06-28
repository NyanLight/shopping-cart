import styles from "./Card.module.css";


export function Card({ title, price, image, clickHandler }) {


  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} />
      </div>
      <div className={styles.titlePart}>
        <div className={styles.title}>
          {title.split(" ").slice(0, 5).join(" ")}
        </div>
        <div className={styles.price}>${price}</div>
      </div>
      <div className={styles.btnPart}>
        <button
          className={styles.buyBtn}
          onClick={clickHandler}
        >
          Buy
        </button>
      </div>
    </article>
  );
}
