import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { useState } from "react";

const Images = ({ photos, onDelete }) => {
  return photos.map((photo) => (
    <Card key={photo.id}>
      <CardImg src={photo.photo} alt="new_image" style={imgSize}></CardImg>
      <Overlay name={photo.name} id={photo.id} onDelete={onDelete}></Overlay>
    </Card>
  ));
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

const Overlay = ({ name, id, onDelete }) => {
  const [hover, setHover] = useState(false);

  return (
    <CardImgOverlay
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div>
          <CardTitle tag="h4" style={txtStyle}>
            {name}
          </CardTitle>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      )}
    </CardImgOverlay>
  );
};
