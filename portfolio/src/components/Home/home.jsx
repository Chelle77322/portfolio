import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../assets/profile.jpg";
//import Particle from "../Particle";
import overhome from "./overhome.jsx";
import Typer from "./typer";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/*<Particle />*/}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👩‍🦱 </span>
              </h1>

              <h1 className="heading-name">
                Meet the full stack web developer
                <strong className="main-name"> Michelle Hall</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typer />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={profile} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <overhome />
    </section>
  );
}

export default Home;