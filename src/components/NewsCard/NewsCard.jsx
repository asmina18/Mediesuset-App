import { Card, Button } from "react-bootstrap";

export const NewsCard = ({ title, teaser, image, id }) => {
  // Helper-funktion til at afkorte tekst
  const kortTekst = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <Card className="h-100">
      {/* Billedsektion */}
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="img-fluid"
        style={{
          maxHeight: "200px",
          objectFit: "cover",
          borderRadius: "8px 8px 0 0",
        }}
      />
      {/* Indhold */}
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title
            style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: "1.25rem",
              color: "dark",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              color: "#6c757d", // Sekundær farve
            }}
          >
            {kortTekst(teaser, 100)}
          </Card.Text>
        </div>
        {/* "Læs mere"-knap */}
        <Button
          variant="dark"
          href={`/news/${id}`}
          style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            border: "none",
          }}
        >
          Læs mere
        </Button>
      </Card.Body>
    </Card>
  );
};
