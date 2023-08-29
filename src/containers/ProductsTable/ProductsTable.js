import './ProductsTable.css';
import Table from '../../components/Table/Table';
import logoproducts from '../../assets/logo_products.svg';
import { useEffect, useState } from 'react';
import { URL_API_PRODUCTS } from '../../https/https';

function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect (() =>{
        sendRequest()
    }, [])    
    
    const sendRequest = async () => {
        const response = await fetch(`${URL_API_PRODUCTS}/products`);
        const data = await response.json();

        if (response.ok) {
            setLoading(false)
            setProducts(data)
        }        
        
    }

    return (
        <div className='container'>
            <div className='header__logo'><img src={logoproducts} alt='logotype' /></div>
            {loading ? <div className="loader"></div> : <Table products={products} />}
        </div>
    )
}

export default ProductsTable;