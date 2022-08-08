import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

const AddImage = ({ processImage }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    processImage({ name, file });
    setName("");
    setFile(null);
  };

  return (
    <div>
      <Button onClick={toggle}>Add Photo</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>New Photo</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="photoName">Name</Label>
              <Input
                id="photoName"
                name="name"
                placeholder="Ex: My Cat"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fileSelect">File</Label>
              <Input
                id="fileSelect"
                name="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </FormGroup>
            <Input type="submit" value="submit" onClick={toggle}></Input>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddImage;
