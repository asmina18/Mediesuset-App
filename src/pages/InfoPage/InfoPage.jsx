import { Container, Row, Col } from "react-bootstrap";
import mediesusetMap from "../../assets/images/mediesuset-map.jpg";

export const InfoPage = () => {
  return (
    <Container className="mt-4">
      {/* Kort over pladsen */}
      <section id="festival-map" className="mb-4 p-3">
        <h2 className="text-center mb-3">Kort over pladsen</h2>
        <p className="text-center text-muted">
          Her kan du se et kort over festivalpladsen, så du kan finde de vigtige områder.
        </p>
        <Row className="justify-content-center align-items-center">
          {/* Billedet */}
          <Col
            xs={12}
            md={6}
            className="text-center"
            style={{ maxWidth: "350px" }}
          >
            <img
              src={mediesusetMap}
              alt="Festivalpladsen kort"
              className="img-fluid rounded"
            />
          </Col>

        </Row>
      </section>

      {/* Find vej */}
      <section id="find-way" className="mb-4 p-3">
        <h2 className="text-center mb-3">Find vej</h2>
        <p className="text-center text-muted">
          Festivalen deler adresse med Tech College Aalborg. Se placeringen på kortet herunder.
        </p>
        <Row className="justify-content-center align-items-center">
          {/* Google Maps */}
          <Col
            xs={12}
            md={6}
            className="text-center"
            style={{ maxWidth: "350px" }}
          >
            <div className="ratio ratio-4x3 rounded overflow-hidden">
              <iframe
                title="Find vej til festivalen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2331.236998768017!2d9.93549341620175!3d57.04854058092662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46493266f42b2e59%3A0xbfb84b8f1db34977!2sTech%20College%20Aalborg!5e0!3m2!1sen!2sdk!4v1673885727387!5m2!1sen!2sdk"
                className="rounded"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

