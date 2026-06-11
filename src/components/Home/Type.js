import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
strings: [
  "Desarrollador Backend",
  "Desarrollador Java",
  "Desarrollador JavaScript",
  "Desarrollador Node.js",
  "Desarrollador de APIs REST",
  "Especialista en MySQL y PostgreSQL",
],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
