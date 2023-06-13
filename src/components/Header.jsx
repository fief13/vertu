import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//React icons
import { FaTrash } from "react-icons/fa";

//context
import { MainContext } from "../utils/MyMainContext";

//images
import bag from "../assets/images/bag.svg";
import caret_down from "../assets/images/caret_down.jpg.svg";
import caret_up from "../assets/images/caret_up.jpg.svg";
import logo from "../assets/images/logo.jpg";
import search from "../assets/images/search.svg";
import user from "../assets/images/user.svg";

const Header = () => {
  const { useCart, countCart, deleteProduct } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openBag, setOpenBag] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="header">
      <div
        className={
          isOpen
            ? "overlay active"
            : openBag
            ? "overlay active"
            : openBurger
            ? "overlay active"
            : "overlay"
        }
        onClick={() => {
          setIsOpen(false);
          setOpenBag(false);
          setOpenBurger(false);
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="topBar">
            <p className="advs">
              Welcome to VERTU, with free shipping on all orders.
            </p>
          </div>
          <div className="bottomBar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">METAVERTU</li>
                <li className="navItem">
                  <NavLink to="/signature">SIGNATURE V</NavLink>
                </li>
                <li className="navItem">ASTER P</li>
                <li className="navItem">iVERTU</li>
                <li className="navItem" onClick={() => setIsOpen(!isOpen)}>
                  GIFTS{" "}
                  <img src={isOpen ? caret_up : caret_down} alt="down-arrow" />
                  <ul className={isOpen ? "dropMenu active" : "dropMenu"}>
                    <li className="dropItem">PHONE PARTNERS</li>
                    <li className="dropItem">LITTLE TREASURES</li>
                    <li className="dropItem">LIFESTYLE ACCESSORIES</li>
                  </ul>
                </li>
                <li className="navItem">VIBE</li>
              </ul>
              <button
                className="btn"
                onClick={() => setOpenBurger(!openBurger)}
              >
                <span className="icon">
                  <svg viewBox="0 0 175 80" width="40" height="40">
                    <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                    <rect
                      y="30"
                      width="80"
                      height="15"
                      fill="#f0f0f0"
                      rx="10"
                    ></rect>
                    <rect
                      y="60"
                      width="80"
                      height="15"
                      fill="#f0f0f0"
                      rx="10"
                    ></rect>
                  </svg>
                </span>
                <span className="text">
                  <ul
                    className={openBurger ? "burgerMenu active" : "burgerMenu"}
                  >
                    <li className="navItem">METAVERTU</li>
                    <li className="navItem">
                      <NavLink to="/signature">SIGNATURE V</NavLink>
                    </li>
                    <li className="navItem">ASTER P</li>
                    <li className="navItem">iVERTU</li>
                    <li className="navItem">GIFTS</li>
                    <li className="navItem">VIBE</li>
                  </ul>
                </span>
              </button>
            </nav>

            <div className="userArea">
              <ul className="icons">
                <li className="icon">
                  <img src={search} alt="search-icon" />
                </li>
                <li className="icon">
                  <Link to="/login">
                    <img src={user} alt="user-icon" />
                  </Link>
                </li>

                <li className="icon bagIcon">
                  <img
                    src={bag}
                    alt="bag-icon"
                    fill="#fff"
                    className="cartIcon"
                    onClick={() => setOpenBag(!openBag)}
                  />
                  <span className="countCart">{countCart}</span>
                  <ul className={openBag ? "cartList active" : "cartList"}>
                    {useCart?.length === 0 ? (
                      <p
                        style={{
                          width: "100%",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        YOUR CART IS EMPTY
                      </p>
                    ) : null}
                    {useCart?.map((item) => {
                      return (
                        <li className="cartItem" key={item?.id}>
                          <div className="itemImg">
                            <img
                              src={`http://localhost:5000/${item?.productImage}`}
                              alt={item?.name}
                            />
                          </div>
                          <div className="itemInfo">
                            <h4 className="itemTitle">{item?.name}</h4>
                            <p className="itemDetail">{item?.details}</p>
                            <span className="itemPrice">
                              ${item?.price} USD
                            </span>
                          </div>
                          <button
                            className="deleteIcon"
                            onClick={() => {
                              deleteProduct(item.id);
                            }}
                          >
                            <FaTrash />
                          </button>
                        </li>
                      );
                    })}
                    {useCart?.length === 0 ? null : (
                      <Link className="viewCart" to="/cart">
                        View Cart
                      </Link>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
