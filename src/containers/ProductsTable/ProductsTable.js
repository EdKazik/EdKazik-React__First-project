import "./ProductsTable.css";
import Table from "../../components/Table/Table";
import logoproducts from "../../assets/logo_products.svg";
import { useEffect, useState } from "react";
import { URL_API_PRODUCTS } from "../../https/https";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idProduct, setIdProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [isEmptyCategory, setIsEmptyCategory] = useState(false);
  const [name, setName] = useState("");
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isEmptyQuantity, setIsEmptyQuantity] = useState(false);
  const [price, setPrice] = useState("");
  const [isEmptyPrice, setIsEmptyPrice] = useState(false);
  const [description, setDescription] = useState("");
  const [isEmptyDescription, setIsEmptyDescription] = useState(false);

  const [openUnivModal, setOpenUnivModal] = useState(false);

  useEffect(
    (isLoaded) => {
      sendRequest();
    },
    [isLoaded]
  );

  const sendRequest = async () => {
    const response = await fetch(`${URL_API_PRODUCTS}/products`);
    const data = await response.json();

    if (response.ok) {
      setLoader(false);
      setProducts(data);
      setIsLoaded(true);
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const deleteProduct = async (event, id) => {
    event.preventDefault();

    await fetch(`${URL_API_PRODUCTS}/products/${id}`, {
      method: "DELETE",
      headers: {
        Content_Type: "application/json",
      },
    });

    setIsLoaded(false);
    handleClose();
  };

  const handleCloseUnivModal = () => {
    setOpenUnivModal(false);
  };

  const addProduct = async (event) => {
    event.preventDefault();

    if (
      category !== "" &&
      name !== "" &&
      quantity !== "" &&
      price !== "" &&
      description !== ""
    ) {
      await fetch(`${URL_API_PRODUCTS}/products`, {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify({
          category,
          name,
          quantity,
          price,
          description,
        }),
      });
      setIsLoaded(false);
      setOpenUnivModal(false);
    } else {
      setIsEmptyCategory(true);
      setIsEmptyName(true);
      setQuantity(true);
      setIsEmptyPrice(true);
      setIsEmptyDescription(true);

      setOpenUnivModal(true);
    }
  };

  const handleChangeModal = (event) => {
    if (event.target.name === "Category") {
      setCategory(event.target.value);
      setIsEmptyCategory(false);
    }

    if (event.target.name === "Name") {
      setName(event.target.value);
      setIsEmptyName(false);
    }

    if (event.target.name === "Quantity") {
      setQuantity(event.target.value);
      setIsEmptyQuantity(false);
    }

    if (event.target.name === "Price") {
      setPrice(event.target.value);
      setIsEmptyPrice(false);
    }

    if (event.target.name === "Description") {
      setDescription(event.target.value);
      setIsEmptyDescription(false);
    }
  };

  const handleSubmitModal = (event) => {
    event.preventDefault();
    setOpenUnivModal(true);
    addProduct(event);
    setIsEmptyCategory(false);
    setIsEmptyName(false);
    setIsEmptyQuantity(false);
    setIsEmptyPrice(false);
    setIsEmptyDescription(false);

    if (!category) {
      setIsEmptyCategory(true);
    }

    if (!name) {
      setIsEmptyName(true);
    }

    if (!quantity) {
      setIsEmptyQuantity(true);
    }

    if (!price) {
      setIsEmptyPrice(true);
    }

    if (!description) {
      setIsEmptyDescription(true);
    }
    setOpenUnivModal(true);
  };

  return (
    <div className="container">
      <div className="header__logo">
        <img src={logoproducts} alt="logotype" />
      </div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <Table
          products={products}
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteProduct={deleteProduct}
          idProduct={idProduct}
          setIdProduct={setIdProduct}
          handleClose={handleClose}
          openUnivModal={openUnivModal}
          setOpenUnivModal={setOpenUnivModal}
          handleCloseUnivModal={handleCloseUnivModal}
          handleChangeModal={handleChangeModal}
          handleSubmitModal={handleSubmitModal}
          isEmptyCategory={isEmptyCategory}
          isEmptyName={isEmptyName}
          isEmptyQuantity={isEmptyQuantity}
          isEmptyPrice={isEmptyPrice}
          isEmptyDescription={isEmptyDescription}
        />
      )}
    </div>
  );
}

export default ProductsTable;
