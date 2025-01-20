
import { useFetch } from "../../hooks/useFetch";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

export const HomePage = () => {
  const { data, error, isLoading } = useFetch("https://api.mediehuset.net/mediesuset/news");

  if (isLoading) return <Spinner animation="border" className="mt-5 text-center" />;

  if (error) return <Alert variant="danger">{error}</Alert>;

  if (error) {
    return <Alert variant="danger">Der skete en fejl: {error}</Alert>;
  }


  const limitedNews = data.items.slice(0, 6);

  return (
    <Container className="mt-5">
    <h1 className="text-center mb-4">Nyheder</h1>
    <Row className="g-4 mb-4">
      {limitedNews.map((news) => (
        <Col key={news.id} xs={12} md={6} lg={4}>
          <NewsCard
            id={news.id}
            title={news.title}
            teaser={news.teaser}
            image={news.image}
          />
        </Col>
      ))}
    </Row>
  </Container>
  );
};
