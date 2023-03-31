import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import { iconEmail, iconMap, iconMobile, } from "assets/images";
import { policies, shopping, socialIcons } from "./footerConfig";

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
                          const { icon, path, title } = item;
                          return (
                            <li key={index}>
                              <a href={`https://www.${path}`}>
                                <img src={icon} alt={title} />
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
                    {
                      shopping.map((item, index) => {
                        const { title } = item;
                        return (
                          <li key={index}>
                            <a href="/">{title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </Col>

              <Col lg={3} md={6}>
                <div className="footer-services">
                  <h3>CUSTOMER POLICIES</h3>
                  <ul>
                    {
                      policies.map((item, index) => {
                        const { title } = item;
                        return (
                          <li key={index}>
                            <a href="/">{title}</a>
                          </li>
                        )
                      })
                    }

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
                        <img src={iconMap} alt='map' /> Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/" className="contact">
                        {" "}
                        <img src={iconMobile} alt='mobile' /> Call Us: 1234567890
                      </a>
                    </li>
                    <li>
                      <a href="/" className="contact">
                        {" "}
                        <img src={iconEmail} alt='email' /> Email Us: mailto:info@yourmail.com
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
