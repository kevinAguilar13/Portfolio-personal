import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Diseñado y desarrollado por Kevin Aguilar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Derechos de autor © {year} KA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kevinAguilar13"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
<li className="social-icons">
  <a
    href="https://wa.me/51933937023"
    style={{ color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
</li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kevin-aguilar-b54a5b264/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kevin_aguilar_13/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
