import React from "react";
import { Link } from "react-router-dom";
//picture
import Metavertu from "../assets/images/Metavertu.jpg";
import anycon2 from "../assets/images/anycon2.jpg";
import anyconv from "../assets/images/anyconv.jpg";
import cardOne from "../assets/images/cardOne.jpg";
import cardTwo from "../assets/images/cardTwo.jpg";
import home from "../assets/images/home.jpg";
import metavertu_logo from "../assets/images/metavertu_logo.jpg";
import signature_v from "../assets/images/signature_v.jpg";

//video
import vertu_video from "../assets/video/vertu_video.mp4";

const Home = () => {
  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="homeOpening">
              <div className="homePage">
                <img src={home} alt="homepct" />
                <div className="background">
                  <div className="combination">
                    <h2 className="logoHome">METAVERTU</h2>
                    <p className="opening">
                      The combination of ingenuity and technology.
                    </p>
                    <button className="primaryBtn">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping">
        <div className="container">
          <div className="shop">
            <div className="collection">
              <h2 className="heading">SHOP BY COLLECTION</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="metavertu">
        <div className="container">
          <div className="row">
            <div className="pages">
              <div className="meta">
                <img src={Metavertu} alt="metavertu" />
              </div>
              <div className="headQuarter">
                <div className="mvHeading">
                  <h2 className="heading">METAVERTU</h2>
                  <p className="info">
                    METAVERTU is almost everything you can ask from a phone.
                    Excellent performance, extraordinary appearance, and the
                    unique Web 3.0 technology.
                  </p>
                  <button className="primaryBtn">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signatureV">
        <div className="container">
          <div className="row">
            <div className="pages">
              <div className="headQuarter">
                <div className="mvHeading">
                  <h2 className="heading">SIGNATURE V</h2>
                  <p className="info">
                    Every process and detail are pilgrimages to the spirit of
                    craftsmanship. With a reverent heart, VERTU Signature V
                    achieves incredible things.
                  </p>
                  <button className="primaryBtn">BUY NOW</button>
                </div>
              </div>
              <div className="meta">
                <img src={signature_v} alt="signature_v" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metavertu">
        <div className="container">
          <div className="row">
            <div className="pages">
              <div className="meta">
                <img src={anyconv} alt="anyconv" />
              </div>
              <div className="headQuarter">
                <div className="mvHeading">
                  <h2 className="heading">ASTER P</h2>
                  <p className="info">
                    Every detail shows your aspiration. With its luxury design,
                    rare leather, and unique craftsmanship, VERTU marks
                    extraordinariness with destiny.
                  </p>
                  <button className="primaryBtn">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signatureV">
        <div className="container">
          <div className="row">
            <div className="pages">
              <div className="headQuarter">
                <div className="mvHeading">
                  <h2 className="heading">IVERTU</h2>
                  <p className="info">
                    iVERTU 5G integrates various fashion elements to continue
                    VERTU's unique romantic aesthetics. Genuine leather and a
                    classic flat screen create the perfect combination.
                  </p>
                  <button className="primaryBtn">BUY NOW</button>
                </div>
              </div>
              <div className="meta">
                <img src={anycon2} alt="anycon2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping step">
        <div className="container">
          <div className="shop">
            <div className="collection">
              <h2 className="heading">STEP INTO WEB3</h2>
            </div>
          </div>
        </div>
      </section>

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
                src={vertu_video}
                type="video/mp4"
              ></video>
              <div className="videoTop">
                <img src={metavertu_logo} alt="metavertu_logo" />
                <div className="prmrBtn">
                  <button className="primaryBtn">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping">
        <div className="container">
          <div className="shop">
            <div className="collection">
              <h2 className="heading">VERTU VIBE</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="vibe">
        <div className="container">
          <div className="row">
            <div className="cards">
              <div className="cardItem">
                <div className="background">
                  <img src={cardOne} alt="card" />
                </div>
                <Link to="/" className="cardItems">
                  <p className="info">
                    The Fascinating Reasons Behind METAVERTU' Expensive Price
                    Tag
                  </p>
                </Link>
              </div>

              <div className="cardItem cardItemTwo">
                <div className="background">
                  <img src={cardTwo} alt="card" />
                </div>
                <Link to="/" className="cardItems">
                  <p className="info">
                    VERTU Launches METAVERTU 1TB WEB3 phone, Thanks to ChatGPT's
                    Contributions
                  </p>
                </Link>
              </div>
            </div>
            <div className="primary">
              <button className="primaryBtn">VIEW ALL</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
