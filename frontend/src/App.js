import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Images from "./Images";
import AddImage from "./AddImage";
import { Input } from "reactstrap";

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function getImages() {
      fetchImages();
    }
    getImages();
  }, []);

  const fetchImages = async () => {
    await axios.get("http://localhost:8000/photo/").then((res) => {
      setPhotos(res.data);
    });
  };

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

  const handleSearch = (value) => {
    const filterLib = photos.filter((photo) => photo.name === value);
    setSearch(filterLib);
  };

  return (
    <div className="grid-box">
      <div className="header">
        <h1>PhotoLib</h1>
      </div>
      <div className="btn-add">
        <AddImage processImage={postImages}></AddImage>
      </div>
      <div className="container">
        <div className="brd-box">
          <div className="src-box">
            <Input
              name="search"
              type="search"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            ></Input>
          </div>
          <div className="pho-lib">
            {search.length > 0 ? (
              <Images photos={search} onDelete={deleteImages}></Images>
            ) : (
              <Images photos={photos} onDelete={deleteImages}></Images>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
