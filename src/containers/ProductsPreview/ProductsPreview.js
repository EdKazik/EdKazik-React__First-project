import './ProductsPreview.css';
import logo2 from '../../assets/logo2.svg';
import Products from '../../components/Products/Products';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlBasketLoaded } from 'react-icons/sl';
import {URL_API_PRODUCTS} from '../../https/https'

const ProductsPreview = () => {
    const [allProducts, setAllProducts] = useState([]);
    const viewProductNavigate = useNavigate();

    
    useEffect(() => {
        sendRequest()
    }, [])
    
    const sendRequest = async () => {
        const response = await fetch(`${URL_API_PRODUCTS}/products`);
        const data = await response.json();
        
        setAllProducts(data)
    }

    const viewProduct = (id) => {
        viewProductNavigate(`/product-preview-id/${id}`)
    }

    

        const product = allProducts.map(elem => {
        return(
            <div className='product__block' key={elem.id} onClick={() => { viewProduct(elem.id) }}>
                <div className='img__products'><img src={ elem.img } alt='logotype'/></div>
                <h3>{elem.text}</h3>
                <div className='price__quantity-block'>
                    <div className='price'><span>{elem.price}₴</span></div>
                    <div className='quantity'><span>Кількість: {elem.quantity}</span></div>
                </div>
                <div className='add__box'>
                    <SlBasketLoaded className='basket' />
                    <span>Готовий до відправки</span>
                </div>
            </div>
        )})

    return (
        <div className='container'>
            <div className='products__preview-logo'><img src={logo2} alt='logotype' /></div>
            
            < Products product={product} />
            
        </div>
    )
}

export default ProductsPreview;