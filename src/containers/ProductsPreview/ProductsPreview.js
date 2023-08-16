import './ProductsPreview.css';
import logo2 from '../../assets/logo2.svg';
import Products from '../../components/Products/Products';
import imgLenovoLaptop from '../../assets/lenovo-laptop-y50-cover-6_01 1.png';
import imgHuawei from '../../assets/matepad-se.jpg';
import imgXiomiPhone from '../../assets/752407_r3412.jpg';


const ProductsPreview = () => {

    const productsList = [
        {
            id: 1,
            img: imgLenovoLaptop,
            text: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            price: 25000,
            quantity: 5
        },
        {
            id: 2,
            img: imgHuawei ,
            text: 'Планшет Huawei Black',
            price: 7900,
            quantity: 8
        },
        {
            id: 3,
            img: imgXiomiPhone ,
            text: 'Смартфон Xiomi RedMI',
            price: 7900,
            quantity: 8
        },
                {
            id: 4,
            img: imgLenovoLaptop ,
            text: 'Смартфон Xiomi RedMI',
            price: 7900,
            quantity: 8
        },
        {
            id: 5,
            img: imgLenovoLaptop ,
            text: 'Смартфон Xiomi RedMI',
            price: 7900,
            quantity: 8
        },
        {
            id: 6,
            img: imgLenovoLaptop ,
            text: 'Смартфон Xiomi RedMI',
            price: 7900,
            quantity: 8
        }
]

    return (
        <div className='container'>
            <div className='products__preview-logo'><img src={logo2} alt='logotype' /></div>
            <Products productsList={productsList} />
            {/* {productsList.map(product => {<Products product={product} />})} */}
        </div>
    )
}

export default ProductsPreview;