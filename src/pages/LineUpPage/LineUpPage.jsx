import { useState } from "react";
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";

export function LineUpPage() {
  const { data, error, isLoading } = useFetch("https://api.mediehuset.net/mediesuset/events");
  const [activeScene, setActiveScene] = useState("all"); // Default tab: "A-Å"

  if (isLoading) {
    return <div>Henter Line-Up...</div>;
  }

  if (error) {
    return <div>Der skete en fejl: {error}</div>;
  }

  if (!data || !data.items) {
    return <div>Ingen events fundet.</div>;
  }

  // Farvekoder for scener
  const sceneColors = {
    "Rød scene": "#ff6b6b",
    "Blå scene": "#4dabf7",
    "Grøn scene": "#51cf66",
    "Lilla scene": "#9f7aea",
  };

  // Filtrerede data baseret på aktiv scene
  const filteredEvents = data.items.filter((event) => {
    if (activeScene === "all") return true; // Vis alle, hvis "A-Å" er valgt
    return event.stage_name === activeScene; // Ellers filtrér på stage_name
  });

  return (
    <Container>
      <h2 className="text-center my-4">Line-Up</h2>

      {/* Tabs til at vælge scene */}
      <Tab.Container activeKey={activeScene} onSelect={(k) => setActiveScene(k)}>
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="all" className="fw-bold">A-Å</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Rød scene" className="fw-bold">Rød Scene</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Blå scene" className="fw-bold">Blå Scene</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Grøn scene" className="fw-bold">Grøn Scene</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Lilla scene" className="fw-bold">Lilla Scene</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content mt-5 px-3 py-5>
          {/* Liste over events */}
          <Tab.Pane eventKey={activeScene}>
            <Row>
              {filteredEvents.map((event) => (
                <Col md={4} key={event.id} className="mb-4">
                  <Card style={{ backgroundColor: sceneColors[event.stage_name] || "#f8f9fa" }}>
                    <Card.Img variant="top" src={event.image} alt={event.title} />
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>
                        {new Date(event.datetime).toLocaleString("da-DK")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
