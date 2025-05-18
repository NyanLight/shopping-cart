import styles from "./Footer.module.css";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import earthIcon from '../../assets/earth.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.companyName}>ODIN</h1>
      <div>
        <ul className={styles.links}>
          <li>Wishlist</li>
          <li>Cart</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className={styles.termsAndLangs}>
        <div>Terms and conditions</div>
        <div>
          <ul className={styles.languages}>
            <li><img src={earthIcon} className={styles.earthIcon}/></li>
            <li>Рус</li>
            <li className={styles.selected}>Eng</li>
          </ul>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <img src={telegramIcon} />
        </div>
        <div className={styles.social}>
          <img src={whatsappIcon} />
        </div>
      </div>
    </footer>
  );
}
