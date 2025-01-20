import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";
import { CampDetails } from "../../components/CampDetails/CampDetails";

export const CampPage = () => {
  const { data, error, isLoading } = useFetch("https://api.mediehuset.net/mediesuset/camps");
  const [campDetails, setCampDetails] = useState(null);

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-danger mt-5">Error: {error}</p>;

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
        Campingområder
      </h1>
      {campDetails ? (
        <CampDetails camp={campDetails} onClose={() => setCampDetails(null)} />
      ) : (
        <Row>
          {data.items.map((camp) => (
            <Col md={4} sm={6} xs={12} key={camp.id} className="mb-4 d-flex">
              <Card className="shadow-sm w-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={camp.image}
                  alt={camp.name}
                  className="img-fluid mx-auto"
                  style={{
                    maxHeight: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    style={{
                      fontFamily: "'Brush Script MT', cursive",
                      fontSize: "1.5rem",
                      color: "#007bff",
                    }}
                  >
                    {camp.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#6c757d", flexGrow: 1 }}>
                    {camp.description.substring(0, 100)}...
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => setCampDetails(camp)}
                    style={{
                      fontFamily: "'Trebuchet MS', sans-serif",
                      backgroundColor: "#007bff",
                      border: "none",
                    }}
                  >
                    Læs mere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
