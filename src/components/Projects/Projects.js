import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/chefControl.jpeg";
import chatify from "../../Assets/Projects/Asistente-Mecanico.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/F-Retail.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos  <strong className="purple">recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí tenéis algunos proyectos en los que he trabajado recientemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Asistene Mecanico Perumotor"
              description="Plataforma web que utiliza inteligencia artificial para ayudar a los conductores a identificar posibles fallas en sus vehículos. El sistema analiza los problemas reportados, brinda recomendaciones y almacena el historial de consultas. Además, cuenta con un panel de asesores que permite gestionar casos, revisar conversaciones y realizar seguimiento a los usuarios para ofrecer una atención más eficiente y personalizada."
              ghLink="https://github.com/kevinAguilar13/proyecto-asistente-perumotor"
              demoLink="No hay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="F-Retail"
              description="F-Retail es una plataforma web especializada en la comercialización de prendas de vestir. Permite a los usuarios explorar catálogos de productos, seleccionar artículos de su interés y gestionar sus pedidos de manera rápida y segura. Su objetivo es brindar una experiencia sencilla, moderna y accesible para la adquisición de ropa en línea."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ChefControl"
              description="ChefControl es un sistema web desarrollado para optimizar la gestión de restaurantes. Permite administrar productos, categorías, pedidos y usuarios desde una plataforma centralizada, facilitando el control de la información y mejorando la eficiencia en los procesos operativos del negocio."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
