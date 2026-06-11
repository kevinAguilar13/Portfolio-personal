import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Kevin Aguilar</span>{" "}
            de <span className="purple">Arequipa, Peru</span>.
            <br />
            Soy un desarrollador{" "}
            <span className="purple">backend apasionado por la tecnología</span> y el{" "}
            <span className="purple">desarrollo de software</span>.
            <br />Me gusta crear aplicaciones eficientes{" "},
            <span className="purple">desarrollar APIs REST y trabajar con bases de datos</span> para{" "}
            <span className="purple">resolver problemas reales</span>.
            <br />
            <br />
            Actualmente continúo fortaleciendo mis conocimientos en Java, JavaScript, Node.js, MySQL y PostgreSQL, participando en proyectos que me permiten crecer profesionalmente y adquirir nuevas experiencias.
            Además de la programación, disfruto:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas tecnologías 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollar proyectos personales 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Explorar soluciones innovadoras 📈
            </li>
             <li className="about-activity">
              <ImPointRight /> Mejorar continuamente mis habilidades técnicas 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Mi objetivo es desarrollar soluciones tecnológicas eficientes que generen valor y ayuden a resolver problemas reales"{" "}
          </p>
          <footer className="blockquote-footer">Kevin Aguilar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
