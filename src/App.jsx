import { Col, Image, Row } from "react-bootstrap";

export default function App() {
  const loginImage = "https://sig1.co/img-twitter-1";
  return (
    <Row>
      <Col sm={6}>
        <Image src={loginImage} fluid />
      </Col>
      <Col sm={6}>Login</Col>
    </Row>
  );
}
