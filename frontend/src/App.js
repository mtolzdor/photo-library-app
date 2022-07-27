import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Images from "./Images";
import AddImage from "./AddImage";
import { Input } from "reactstrap";

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  const fetchImages = async () => {
    await axios.get("http://localhost:8000/photo/").then((res) => {
      const result = res.data;
      setPhotos(result);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const getImage = async (id) => {
    await axios.get(`http://localhost:8000/photo/${id}`).then((res) => {
      return res.data;
    });
  };

  const postImages = async (image) => {
    let newPhoto = new FormData();
    newPhoto.append("name", image.name);
    newPhoto.append("photo", image.file);
    await axios
      .post("http://localhost:8000/photo/", newPhoto, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        setPhotos([...photos, res.data]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteImages = (id) => {
    axios.delete(`http://localhost:8000/photo/${id}`).catch((error) => {
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
      <div>
        <AddImage processImage={postImages}></AddImage>
      </div>
      <form>
        <Input
          name="search"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </form>
      <Images photos={photos} onDelete={deleteImages}></Images>
    </>
  );
}

export default App;
