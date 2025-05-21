import styles from './CartCard.module.css';
import binIcon from '../../assets/bin.svg';

export function CartCard({id, title , price, image, quantity = 1}) {
    return (
        <article className={styles.card}>
            <div>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={image}/>
                </div>
                <div className={styles.quantityWrapper}>
                    <button className={styles.sign} onClick={() => console.log(`${id} minus`)}>–</button>
                    <div>{quantity}</div>
                    <button className={styles.sign} onClick={() => console.log(`${id} plus`)}>+</button>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <div className={styles.rightPart}>
                <div>
                    <img onClick={() => console.log(`delete ${id}`)} src={binIcon} />
                </div>
                <div className={styles.totalPrice}>{price * quantity}</div>
            </div>
        </article>
    )
}