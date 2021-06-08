import React from "react";
import Typewriter from "typewriter-effect";

function Typer() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "MERN Stack Developer",
          "Modern Javascript User",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typer;