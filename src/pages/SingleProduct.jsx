import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { MainContext } from "../utils/MyMainContext";

const Singleproduct = () => {
  const { addCart } = useContext(MainContext);
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        await axios
          .get(`http://localhost:5000/api/products/${id}`)
          .then((res) => {
            setData(res.data);
          });
      } catch (error) {
        console.log(error);
        Navigate("/error");
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">Welcome to my Product</h2>
          <div className="productDetails">
            <div className="leftSide">
              <img
                src={
                  data
                    ? `http://localhost:5000/${data?.productImage}`
                    : "http://localhost:5000uploads/cardone.jpg"
                }
                alt="album"
              />
            </div>
            <div className="rightSide">
              <h2 className="title">{data?.name}</h2>
              <p className="details">{data?.details}</p>
              <span className="price">${data?.price} USD</span>
              <button
                onClick={() => {
                  addCart(data);
                }}
              >
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singleproduct;
