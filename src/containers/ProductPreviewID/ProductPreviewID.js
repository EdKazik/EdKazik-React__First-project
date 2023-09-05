import "../ProductPreviewID/ProductPreviewID.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL_API_PRODUCTS } from "../../https/https";
import logo from "../../assets/logo2.svg";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowInLeft, BsFillPatchCheckFill } from "react-icons/bs";
import { ROUTING } from "../../constans/index";

const ProductPreviewID = () => {
  const { id } = useParams();
  const [productID, setProductID] = useState("");
  const Navigate = new useNavigate();

  useEffect(() => {
    sendRequest();
  }, []);

  const sendRequest = async () => {
    const response = await fetch(`${URL_API_PRODUCTS}/products/${id}`);
    const data = await response.json();

    setProductID(data);
  };

  const buttonClick = () => {
    Navigate(-1);
  };
  const goHomePage = () => {
    Navigate(ROUTING.productsTable);
  };

  return (
    <div className="product__preview-id">
      <div className="header__product-preview-id">
        <img src={logo} alt="logotype" onClick={goHomePage} />
      </div>
      <div className="main__product-preview-id">
        <div className="button__h1">
          <BsBoxArrowInLeft className="arrow__button" onClick={buttonClick} />
          <h1>{productID.name}</h1>
        </div>
        <div className="product__box">
          <div className="product__img">
            <img src={productID.img} width={400} height={260} />
          </div>
          <div className="product__text">
            <h2>
              <BsFillPatchCheckFill /> Є в наявності
            </h2>
            <p>{productID.price}₴</p>
            <span>Кількість: {productID.quantity}</span>
          </div>
        </div>
        <div className="product__content">
          <h2>Опис</h2>
          <h3>{productID.text}</h3>
          <div>
            <p>..........text...........</p>
            <p>............text.........</p>
            <p>..........text...........</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewID;
