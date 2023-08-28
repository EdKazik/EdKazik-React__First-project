import './Products.css';
import { SlBasketLoaded } from 'react-icons/sl';


const Products = (props) => {
    
    const product = props.productsList.map(elem => {
        return(
            <div className='product__block' key={elem.id}>
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
        <div className='products__block'>
            {product}
        </div>


    )
}

export default Products;