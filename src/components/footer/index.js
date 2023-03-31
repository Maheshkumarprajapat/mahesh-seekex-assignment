import {
  iconEmail,
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconMap,
  iconMobile,
  iconPinterest,
  iconTwitter,
} from "assets/images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import { socialIcons } from "./footerConfig";

const Footer = () => {

  return (
    <>
      <footer>
        <div className="footer-box">
          <Container>
            <Row>
              <Col lg={3} md={6}>
                <div className="footer-item">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five
                    centuries....
                  </p>
                  <div className="social-icons">
                    <ul>
                      {
                        socialIcons.map((item, index) => {
                          const { icon, path } = item;
                          return (
                            <li key={index}>
                              <a href={`https://www.${path}`}>
                                <img src={icon} />{" "}
                              </a>
                            </li>
                          )
                        })
                      }

                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6}>
                <div className="footer-services">
                  <h3>ONLINE SHOPPING</h3>
                  <ul>
                    <li>
                      <a href="">Men's T-Shirts</a>
                    </li>
                    <li>
                      <a href="">Women's Wear</a>
                    </li>
                    <li>
                      <a href="">Winter Collections</a>
                    </li>
                    <li>
                      <a href="">Hooded T-Shirts</a>
                    </li>
                    <li>
                      <a href="">Streetwear Collections</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3} md={6}>
                <div className="footer-services">
                  <h3>CUSTOMER POLICIES</h3>
                  <ul>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="">Shipping & Returns Policy</a>
                    </li>
                    <li>
                      <a href="">Cancellation & Refund Policy</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={3} md={6}>
                <div className="footer-services address">
                  <h3>STORE INFORMATION</h3>
                  <ul>
                    <li>
                      <a href="/" className="contact">
                        {" "}
                        <img src={iconMap} /> Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/" className="contact">
                        {" "}
                        <img src={iconMobile} /> Call Us: 1234567890
                      </a>
                    </li>
                    <li>
                      <a href="/" className="contact">
                        {" "}
                        <img src={iconEmail} /> Email Us: mailto:info@yourmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="copyright">
          <Container>
            <h4>©2022-23 Powered By dummy team</h4>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
