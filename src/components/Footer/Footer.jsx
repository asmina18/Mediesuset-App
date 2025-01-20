import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/images/Hancock-logo.png";

export const Footer = ({heroImage}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Emailadresse er påkrævet.");
    } else if (!validateEmail(email)) {
      setError("Indtast en gyldig emailadresse.");
    } else {
      setError("");
      alert("Du er nu tilmeldt nyhedsbrevet!");
    }
  };
  console.log("Hero Image  in Footer:", heroImage);

  return (
    <footer>
      {/* Nyhedsbrev Sektion */}
      <div
        className="text-center text-light py-5"
        style={{
          backgroundImage: heroImage ? `url(${heroImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-3">TILMELD NYHEDSBREV</h2>
              <p className="mb-4">
                Få de seneste nyheder sendt direkte til din indbakke
              </p>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Indtast emailadresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" variant="primary">
                    TILMELD
                  </Button>
                </InputGroup>
                {error && <div className="text-danger">{error}</div>}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer logo og tagline */}
      <div className="bg-dark text-center py-4 text-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <img
                src={Logo}
                alt="Hancock logo"
                className="img-fluid mb-3"
                style={{ maxWidth: "100px" }}
              />
              <p className="mb-0">- Smag forskellen...</p>
              <p className="small mb-0">© 2023 Hancock. Alle rettigheder forbeholdes.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
