import '../ProductPreviewID/ProductPreviewID.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {URL_API_PRODUCTS} from '../../https/https'

const ProductPreviewID = () => {
    const { id } = useParams();
    const [, setProductID] = useState(null);


    useEffect(() => {
        sendRequest()
    },[])
    
    const sendRequest = async () => {
        const response = await fetch(`${URL_API_PRODUCTS}/products/${id}`);
        const data = await response.json();
        
        setProductID(data)
    }


    return (
        < div className="product__preview-id">
            <span>Chosen product is: {id}</span>
        </div>
    )
}

export default ProductPreviewID;