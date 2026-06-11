import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTANME <span className="purple"> PRESENTARME  </span> 
            </h1>
            <p className="home-about-body">
              Soy un desarrollador backend apasionado por crear soluciones eficientes y funcionales.
              Me gusta aprender nuevas tecnologías y aplicar mis conocimientos para desarrollar 
              aplicaciones que resuelvan problemas reales.
              <br />
              <br />
              Tengo experiencia trabajando con
              <i>
                <b className="purple">
                  {" "}
                  Java, JavaScript, Node.js, MySQL y PostgreSQL{" "}
                </b>
              </i>
              — Disfruto especialmente del desarrollo de APIs REST, la gestión de bases de datos
              y la construcción de sistemas backend escalables.
              <br />
              <br />
              Mis principales áreas de interés son  
              <i>
                <b className="purple">
                  {" "}
                  el desarrollo web, la integración de servicios {" "}
                </b>
              </i>
              y el diseño de aplicaciones orientadas al rendimiento y la seguridad.
              <br />
              <br />
              Siempre que tengo la oportunidad, me gusta crear proyectos utilizando{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">Java</b>,{" "}
              <b className="purple">JavaScript</b>,{" "}
              <b className="purple">MySQL</b> y{" "}
              <b className="purple">PostgreSQL</b>, desarrollando aplicaciones y APIs que me permiten seguir fortaleciendo mis habilidades como desarrollador backend.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
