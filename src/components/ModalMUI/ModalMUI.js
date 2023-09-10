import * as React from "react";
import Box from "@mui/material/Box";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./ModalMUI.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ openModal, deleteProduct, idProduct, handleClose }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are u sure you want to delete this product?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button className="modal__button-cancel" onClick={handleClose}>
              CANCEL
            </Button>
            <Button
              className="modal__button-delete"
              onClick={(event) => deleteProduct(event, idProduct)}
            >
              DELETE
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
