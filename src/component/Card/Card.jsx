import styles from './Card.module.css';

export function Card({id, title, price, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} />
      </div>
      <div className={styles.titlePart}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div className={styles.btnPart}>
        <button className={styles.buyBtn} onClick={() => console.log(`clicked on ${id}`) }>Buy</button>
      </div>
    </article>
  );
}
