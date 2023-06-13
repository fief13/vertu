import React from "react";
import { Link } from "react-router-dom";

//images
import payment from "../assets/images/payment.jpg";
import facebook from "../assets/images/socialmedia/facebook.svg";
import instagram from "../assets/images/socialmedia/instagram.svg";
import twitter from "../assets/images/socialmedia/twitter.svg";
import youtube from "../assets/images/socialmedia/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerHeadings">
          <div className="contain">
            <div className="collections">
              <h2 className="heading">COLLECTIONS</h2>
              <ul className="collect">
                <li className="collectItem">METAVERTU</li>
                <li className="collectItem">SIGNATURE V</li>
                <li className="collectItem">ASTER P</li>
                <li className="collectItem">iVERTU</li>
              </ul>
            </div>

            <div className="collections">
              <h2 className="heading">COMPANY</h2>
              <ul className="collect">
                <li className="collectItem">ABOUT US</li>
                <li className="collectItem">BOUTIQUE</li>
                <li className="collectItem">AMAZON</li>
                <li className="collectItem">LAZADA</li>
                <li className="collectItem">SHOPEE</li>
              </ul>
            </div>

            <div className="collections">
              <h2 className="heading">SUPPORT</h2>
              <ul className="collect">
                <li className="collectItem">FAKE SITES</li>
                <li className="collectItem">ABOUT TAXES</li>
                <li className="collectItem">PAYMENT POLICY</li>
                <li className="collectItem">SHIPPING & DELIVERY</li>
                <li className="collectItem">RETURN & REFUND</li>
                <li className="collectItem">TERMS & CONDITIONS</li>
                <li className="collectItem">COOKIE & PRIVACY</li>
              </ul>
            </div>
          </div>

          <div className="containTwo">
            <div className="help">
              <h2 className="heading">DO YOU NEED HELP?</h2>
              <ul className="collect">
                <li className="collectItem">CONTACT US</li>
                <li className="collectItem">
                  EMAIL US: OFFICIAL.SERVICE@VERTU.COM
                </li>
              </ul>
            </div>

            <div className="visa">
              <img src={payment} alt="payment" />
            </div>
          </div>
        </div>

        <div className="footerNews">
          <div className="website">
            <ul className="socialMedia">
              <li className="socialItem">
                <Link to="https://www.facebook.com/Vertu">
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
              <li className="socialItem">
                <Link to="https://www.instagram.com/vertu.england/">
                  <img src={instagram} alt="facebook" />
                </Link>
              </li>
              <li className="socialItem">
                <Link to="https://www.youtube.com/@officialvertu1542">
                  <img src={youtube} alt="facebook" />
                </Link>
              </li>
              <li className="socialItem">
                <Link to="https://twitter.com/EnglandVertu">
                  <img src={twitter} alt="facebook" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <p className="endFooter">© 2022-2023 VERTU ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
