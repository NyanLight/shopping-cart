import { Link } from "react-router";
import styles from './Header.module.css'
import heartIcon from '../../assets/heart.svg'
import cartIcon from '../../assets/cart.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.companyName}>
        <Link to="/">ODIN</Link>
      </h1>
      <div className={styles.icons}>
        <div className={styles.icon}>
            <Link to='/favorite'>
            <img src={heartIcon}/>
            </Link>
            </div>
        <div className={styles.icon}>
            <Link to="/cart">
            <img src={cartIcon} />
            </Link>
            </div>
      </div>
    </header>
  );
}
