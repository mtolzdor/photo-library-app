import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  CardImgOverlay,
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
      <CardImgOverlay>
        <CardTitle tag="h4" style={txtStyle}>
          {photo.name}
        </CardTitle>
      </CardImgOverlay>
      <button onClick={() => onDelete(photo.id)}>delete</button>
    </Card>
  ));

  return (
    <Container fluid>
      <Row>
        {imgArr.map((pic) => (
          <Col sm="4">{pic}</Col>
        ))}
      </Row>
    </Container>
  );
};

const imgSize = {
  objectFit: "cover",
  height: 250,
  width: "100%",
};

const txtStyle = {
  textAlign: "left",
  color: "Black",
  fontFamily: "Proxima Nova",
};

export default Images;
