import { Container, Card, Button, Row, Col } from "react-bootstrap";

export const CampDetails = ({ camp, onClose }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
            <Card.Img
              variant="top"
              src={camp.image}
              alt={camp.name}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "300px",
                objectFit: "contain",
              }}
            />
            <Card.Body>
              <Card.Title
                className="text-primary"
                style={{
                  fontFamily: "'Brush Script MT', cursive",
                  fontSize: "2rem",
                }}
              >
                {camp.name}
              </Card.Title>
              <Card.Text style={{ color: "#343a40" /* $dark-color */ }}>
                {camp.description}
              </Card.Text>
              <p style={{ color: "#6c757d" }}>
                <strong>Pladser:</strong> {camp.num_people}
              </p>
              <h5
                className="mt-4"
                style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
              >
                Billetter
              </h5>
              <ul className="list-unstyled">
                {camp.tickets.map((ticket) => (
                  <li
                    key={ticket.id}
                    className="mb-2"
                    style={{ color: "#6c757d"  }}
                  >
                    <strong style={{ color: "#007bff" /* $primary-color */ }}>
                      {ticket.name}:
                    </strong>{" "}
                    {ticket.description}
                  </li>
                ))}
              </ul>
              <Button
                variant="secondary"
                className="mt-3"
                style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  backgroundColor: "#6c757d",
                  border: "none",
                }}
                onClick={onClose}
              >
                Tilbage
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
