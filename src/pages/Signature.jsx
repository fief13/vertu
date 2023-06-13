import React, { useEffect, useState } from "react";
import Card from "../components/Card";

//video
import caret_down from "../assets/images/caret_down.jpg.svg";
import signature_v from "../assets/video/signature_v.mp4";
import axios from "axios";

const Signature = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(process.env.REACT_APP_BASE).then((res) => {
          setPhones(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <section className="videoPlayer">
        <div className="container">
          <div className="row">
            <div className="videoHeading">
              <video
                playsInline="playsinline"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                preload="metadata"
                src={signature_v}
                type="video/mp4"
              ></video>
              <div className="videoTop">
                <div className="prmrBtn">
                  <button className="primaryBtn">SIGNATURE V</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vertuSignature">
        <div className="container">
          <div className="row">
            <div className="filter">
              <p className="colorPrice">FILTER:</p>
              <ul className="price">
                <li className="color">
                  Price
                  <img src={caret_down} alt="down-arrow" />
                </li>
                <li className="color">
                  Color
                  <img src={caret_down} alt="down-arrow" />
                </li>
              </ul>

              <div className="products">
                <p className="productItem">11 PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardSection">
        <div className="container">
          <div className="row">
            <div className="cardBox">
              {phones.map((item) => {
                return <Card key={item.id} data={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signature;
