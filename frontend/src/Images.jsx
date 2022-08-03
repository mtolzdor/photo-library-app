import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

const Images = ({ photos, onDelete }) => {
  const imgArr = photos.map((photo) => (
    <Card key={photo.id}>
      <CardImg src={photo.photo} alt="new_image" style={imgSize}></CardImg>
      <CardImgOverlay>
        <CardTitle tag="h4" style={txtStyle}>
          {photo.name}
        </CardTitle>
      </CardImgOverlay>
      <button onClick={() => onDelete(photo.id)}>delete</button>
    </Card>
  ));

  return imgArr;
};

const imgSize = {
  objectFit: "cover",
  height: 250,
  width: "100%",
};

const txtStyle = {
  textAlign: "left",
  color: "white",
  fontFamily: "Proxima Nova",
};

export default Images;
