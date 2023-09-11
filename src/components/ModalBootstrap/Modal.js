// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Button } from "react-bootstrap";
// import { useState } from "react";
import "./Modal.css";

const MyModal = ({ handleClose, show, text }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Are u sure you want to delete this product?</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <span>Cancel</span>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <span>Delete</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
