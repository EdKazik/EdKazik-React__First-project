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
  const [product, setProduct] = useState("");

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
    // console.log(idProduct);
  };

  const deleteProduct = async (event, id) => {
    event.preventDefault();
    // console.log(`DELETE PRODUCT BUTTON ACTIVE ${id}`);

    await fetch(`${URL_API_PRODUCTS}/products/${id}`, {
      method: "DELETE",
      headers: {
        Content_Type: "application/json",
      },
    });

    setIsLoaded(false);
    handleClose();
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
        />
      )}
    </div>
  );
}

export default ProductsTable;
