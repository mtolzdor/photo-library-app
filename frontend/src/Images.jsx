import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
} from "reactstrap";

const Images = ({ photos, onDelete }) => {
  const imgArr = photos.map((photo) => (
    <Card>
      <CardImg
        key={photo.id}
        src={photo.photo}
        alt="new_image"
        style={imgSize}
      ></CardImg>
      <CardBody>
        <CardTitle tag="h3">{photo.name}</CardTitle>
        <button onClick={() => onDelete(photo.id)}>delete</button>
      </CardBody>
    </Card>
  ));

  return (
    <Container fluid>
      <Row>
        {imgArr.map((pic) => (
          <Col sm="3">{pic}</Col>
        ))}
      </Row>
    </Container>
  );
};

const imgSize = {
  objectFit: "cover",
  maxWidth: 325,
  height: 250,
  width: "auto",
};

export default Images;
