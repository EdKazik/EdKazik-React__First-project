import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input";
import "./UniversalModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UniversalModal = ({
  setOpenUnivModal,
  openUnivModal,
  handleCloseUnivModal,
  addProduct,
  titleModal,
}) => {
  return (
    <Modal
      open={openUnivModal}
      onClose={handleCloseUnivModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal__box" sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {titleModal} product
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component="span"
        >
          <form>
            <span className="form__titles">Category</span>
            <Input type="text" className="modal__input" />
            <br />
            <span className="form__titles">Name</span>
            <Input type="text" className="modal__input" />
            <br />
            <span className="form__titles">Quantity</span>
            <Input type="text" className="modal__input" />
            <br />
            <span className="form__titles">Price</span>
            <Input type="text" className="modal__input" />
            <br />
            <span className="form__titles">Description</span>
            <Input type="text" className="modal__input" />
            <br />
          </form>

          <Input
            onClick={handleCloseUnivModal}
            type="button"
            value="Cancel"
            className="button__cancel"
          />
          <Input
            onClick={addProduct}
            type="submit"
            value="Submit"
            className="button__submit"
          />
        </Typography>
      </Box>
    </Modal>
  );
};

export default UniversalModal;
