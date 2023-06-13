import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MainContext } from "../utils/MyMainContext";


const Cart = () => {
  const { useCart, setUseCart, deleteProduct } = useContext(MainContext);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    let total = useCart.map((item) => {
      return item.price * item.quantity;
    });
    let summary = total.reduce((acc, curr) => acc + curr, 0);
    setPriceSum(summary);
  }, [useCart]);

  const increment = (phone) => {
    const exitingPhone = useCart.find((item) => item.id === phone.id);
    if (exitingPhone) {
      const updatedCart = useCart.map((data) => {
        if (data.id === exitingPhone.id) {
          return { ...data, quantity: exitingPhone.quantity + 1 };
        } else {
          return data;
        }
      });
      setUseCart(updatedCart);
    }
  };

  const decrement = (phone) => {
    const exitingPhone = useCart.find((item) => item.id === phone.id);
    if (exitingPhone) {
      const updatedCart = useCart.map((data) => {
        if (data.id === exitingPhone.id && data.quantity > 1) {
          return { ...data, quantity: exitingPhone.quantity - 1 };
        } else {
          return data;
        }
      });
      setUseCart(updatedCart);
    }
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">YOUR CART</h2>
          <table>
            <thead>
              <tr>
                <th className="opening">PRODUCT</th>
                <th className="opening">PRODUCT NAME</th>
                <th className="opening">PRICE</th>
                <th className="opening">QUANTITY</th>
                <th className="opening">DELETE</th>
                <th className="opening">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {useCart?.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td>
                      <img
                        src={`http://localhost:5000/${item?.productImage}`}
                        alt={item?.name}
                      />
                    </td>
                    <td>{item?.name}</td>
                    <td>${item?.price}USD</td>
                    <td>
                      <div className="quantityBorder">
                        <span
                          className="plus"
                          onClick={() => {
                            increment(item);
                          }}
                        >
                          +
                        </span>
                        <span className="count">{item?.quantity}</span>
                        <span
                          className="minus"
                          onClick={() => {
                            decrement(item);
                          }}
                        >
                          -
                        </span>
                      </div>
                    </td>
                    <td>
                      <button
                        className="deleteIcon"
                        onClick={() => {
                          deleteProduct(item.id);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </td>
                    <td>${item.price * item.quantity} USD</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="checkOut">
            <div className="total">
              <span>SUBTOTAL : $ {priceSum} USD</span>
              <p className="taxes">Taxes and shipping calculated at checkout</p>
            </div>
            <button className="primaryBtn">CHECK OUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
