import "./Table.css";
import Button from "../Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../components/ModalMUI/ModalMUI";

const Table = ({
  products,
  openModal,
  setOpenModal,
  deleteProduct,
  idProduct,
  setIdProduct,
  handleClose,
}) => {
  const leftButtonNavigate = useNavigate();

  const leftButtonClick = () => {
    leftButtonNavigate("/products-preview");
    // console.log("left button is OK!!!");
  };

  const handleDeleteShowModal = (id) => {
    setOpenModal(true);
    setIdProduct(id);
  };

  const handleEditShowModal = () => {
    setOpenModal(true);
  };

  const productsElements = products.map((el) => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.category}</td>
        <td>{el.name}</td>
        <td>{el.quantity}</td>
        <td>{el.price}</td>
        <td>
          <BsFillPencilFill
            className="edit__button"
            onClick={handleEditShowModal}
          />
        </td>
        <td>
          <BsFillTrash3Fill
            className="delete__button"
            onClick={() => handleDeleteShowModal(el.id)}
          />
        </td>
      </tr>
    );
  });

  return (
    <div className="main">
      <div className="buttons">
        <Button className="left__button" onClick={leftButtonClick}>
          <IoMdPerson className="left__button-logo" />
          Preview
        </Button>
        <Button className="right__button">
          <AiOutlinePlus className="right__button-logo" />
          Add product
        </Button>
      </div>
      <div className="table__box">
        <h1>Products</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price(₴)</th>
            </tr>
            {productsElements}
          </tbody>
        </table>
      </div>
      <BasicModal
        openModal={openModal}
        deleteProduct={deleteProduct}
        //   editProduct={editProduct}
        idProduct={idProduct}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Table;
