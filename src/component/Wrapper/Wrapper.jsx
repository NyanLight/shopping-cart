import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ShopContext } from "./context";
import { useState } from "react";

export function Wrapper() {
  const [cart, setCart] = useState([]);

  const add = (product) => {
    let temp = [...cart];
    let itemIndex = temp.findIndex((el) => el.product.id === product.id);
    if (itemIndex >= 0) {
      temp[itemIndex].quantity = temp[itemIndex].quantity + 1;
    } else {
      temp.push({ product, quantity: 1 });
    }
    setCart([...temp]);
  };

  const del = (id) => {
    let temp = [...cart];
    let itemIndex = temp.findIndex((el) => el.product.id === id);
    if (temp[itemIndex].quantity === 1) {
      temp.splice(itemIndex, 1);
    } else {
      temp[itemIndex].quantity = temp[itemIndex].quantity - 1;
    }
    setCart([...temp]);
  };

  const clearItem = (id) => {
    let temp = [...cart];
    let itemIndex = temp.findIndex((el) => el.product.id === id);
    temp.splice(itemIndex, 1);
    setCart([...temp]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <ShopContext.Provider value={{ cart, add, del, clearItem, clearCart }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ShopContext.Provider>
    </>
  );
}
