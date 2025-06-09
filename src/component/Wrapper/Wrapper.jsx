import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ShopContext } from "./context";

const cart = [];
const add = (product) => {
  let itemIndex = cart.findIndex((el) => el.product.id === product.id);
  if (itemIndex >= 0) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
};

const del = (id) => {
  let itemIndex = this.cart.findIndex((el) => el.id === id);
  if (this.cart[itemIndex].quantity === 1) {
    this.cart.splice(itemIndex, 1);
  } else {
    this.cart[itemIndex].quantity -= 1;
  }
};

export function Wrapper({ children }) {
  return (
    <>
      <ShopContext value={{ cart, add, del }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ShopContext>
    </>
  );
}
