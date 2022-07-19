import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Images from "./Images";
import { Input } from "reactstrap";

function App() {
  const [photos, setPhotos] = useState([]);
  const [postData, setPost] = useState(null);

  const fetchImages = async () => {
    await axios.get("http://localhost:8000/photos/").then((res) => {
      const result = res.data;
      setPhotos(result);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const postImages = () => {
    let newPhoto = new FormData();
    newPhoto.append("photo", postData);
    axios
      .post("http://localhost:8000/photos/", newPhoto, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteImages = (id) => {
    axios.delete(`http://localhost:8000/photos/${id}`).catch((error) => {
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      }
    });
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const handleSearch = (e) => {
    const filterLib = photos.filter(
      (photo) => photo.id === parseInt(e.target.value)
    );
    setPhotos(filterLib);
  };

  return (
    <>
      <div className="header"></div>
      <form>
        <Input name="search" type="search" onChange={handleSearch}></Input>
      </form>
      <div>
        <Input
          type="file"
          onChange={(i) => {
            setPost(i.target.files[0]);
          }}
        ></Input>
        <button onClick={postImages}>Submit</button>
      </div>
      <Images photos={photos} onDelete={deleteImages}></Images>
    </>
  );
}

export default App;
