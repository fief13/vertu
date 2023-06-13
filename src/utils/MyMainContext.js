import { createContext, useEffect, useState } from "react";

//context
export const MainContext = createContext();

export const MyMainContext = ({ children }) => {
  const [useCart, setUseCart] = useState([]);
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    let initialCart = JSON.parse(localStorage.getItem("useCart"));
    if (initialCart === null) {
      localStorage.setItem("useCart", JSON.stringify(useCart));
    } else {
      if (JSON.stringify(initialCart) !== JSON.stringify(useCart)) {
        setUseCart(initialCart);
      }
    }
  }, []);

  useEffect(() => {
    const totalSum = useCart.reduce((acc, curr) => acc + curr.quantity, 0);
    setCountCart(totalSum);
  }, [useCart]);



  useEffect(() => {
    localStorage.setItem("useCart", JSON.stringify(useCart));
  }, [useCart]);


  
  const addCart = (newPhone) => {
    const exitingPhone = useCart.find((phone) => newPhone.id === phone.id);
    if (exitingPhone) {
      const updatedCart = useCart.map((item) => {
        if (item.id === exitingPhone.id) {
          return { ...item, quantity: exitingPhone.quantity + 1 };
        } else {
          return item;
        }
      });
      setUseCart(updatedCart);
    } else {
      setUseCart(() => [...useCart, { ...newPhone, quantity: 1 }]);
    }
  };

  const deleteProduct = (phoneID) => {
    const deleteItem = useCart.filter((item) => item.id !== phoneID);
    setUseCart(deleteItem);
  };

  const globalStates = {
    // states
    useCart,
    setUseCart,
    countCart,
    setCountCart,

    //functions
    addCart,
    deleteProduct,
  };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};
