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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UniversalModal = ({
  openUnivModal,
  handleCloseUnivModal,
  titleModal,
  handleChangeModal,
  handleSubmitModal,
  isEmptyCategory,
  isEmptyName,
  isEmptyQuantity,
  isEmptyPrice,
  isEmptyDescription,
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
            <Input
              handleChangeModal={handleChangeModal}
              name="Category"
              type="text"
              className={`modal__input ${isEmptyCategory ? "error" : ""}`}
            />
            {isEmptyCategory && (
              <span className="category__span error__span">
                This field is required
              </span>
            )}
            <br />
            <span className="form__titles">Name</span>
            <Input
              handleChangeModal={handleChangeModal}
              name="Name"
              type="text"
              className={`modal__input ${isEmptyName ? "error" : ""}`}
            />
            {isEmptyName && (
              <span className="name__span error__span">
                This field is required
              </span>
            )}

            <br />
            <span className="form__titles">Quantity</span>
            <Input
              handleChangeModal={handleChangeModal}
              name="Quantity"
              type="text"
              className={`modal__input ${isEmptyQuantity ? "error" : ""}`}
            />
            {isEmptyQuantity && (
              <span className="quantity__ span error__span">
                This field is required
              </span>
            )}
            <br />
            <span className="form__titles">Price</span>
            <Input
              handleChangeModal={handleChangeModal}
              name="Price"
              type="text"
              className={`modal__input ${isEmptyPrice ? "error" : ""}`}
            />
            {isEmptyPrice && (
              <span className="price__span error__span">
                This field is required
              </span>
            )}
            <br />
            <span className="form__titles">Description</span>
            <Input
              handleChangeModal={handleChangeModal}
              name="Description"
              type="text"
              className={`modal__input ${isEmptyDescription ? "error" : ""}`}
            />
            {isEmptyDescription && (
              <span className="description__span error__span">
                This field is required
              </span>
            )}
            <br />
          </form>

          <Input
            onClick={handleCloseUnivModal}
            type="button"
            value="Cancel"
            className="button__cancel"
          />
          <Input
            onClick={handleSubmitModal}
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
