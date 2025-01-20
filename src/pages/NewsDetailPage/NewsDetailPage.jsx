import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Container, Spinner, Alert, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NewsDetailPage.module.scss"; // Import SCSS-fil

export const NewsDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://api.mediehuset.net/mediesuset/news/${id}`);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  const { title, content, image, author, datetime } = data.item;

  return (
    <Container className="mt-5 px-3 py-5">
      <Card className=" border-0">
        <Card.Body className="p-0">
          {/* Billed-container med styling fra SCSS */}
          <div className={styles["image-container"]}>
            <Image src={image} alt={title} className={styles["image-full"]} />
          </div>
          <div className="p-4">
            <h1 className="h3 fw-bold text-center text-dark mb-4">{title}</h1>
            <p className="text-center text-muted small mb-4">
              <strong>{author}</strong> | Dato: {new Date(datetime).toLocaleDateString()}
            </p>
            {/* Brødtekst-indhold */}
            <div className={`content ${styles["content-text"]}`}>
              <p>{content}</p>
            </div>
            {/* Tilbage-knap */}
            <div className="text-center mt-4">
              <Button as={Link} to="/" variant="primary" className="px-4 py-2">
                Tilbage til Nyheder
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
