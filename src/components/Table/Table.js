import './Table.css';
import Button from '../Button/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrash3Fill } from 'react-icons/bs';


const Table = () => {
    
    const products = [
        {
            id: 1,
            category: 'PC',
            name: 'Lenovo Y50-70',
            quantity: '5',
            price: '25,000.00',
        },
        {
            id: 2,
            category: 'Clothes',
            name: 'Nike M Nk Df Acd21',
            quantity: '22',
            price: '4,000.00',
        },
        {
            id: 3,
            category: 'Plumbing',
            name: 'Cersanit MITO 17',
            quantity: '1337',
            price: '5,000.00',
        }
    ];

    const setProduct = products.map(el => {
        return (
            
            <tr key={el.id}>
            <td >{el.id}</td>
            <td >{el.category}</td>
            <td >{el.name}</td>
            <td >{el.quantity}</td>
            <td >{el.price}</td>
            <td><BsFillPencilFill/></td>
            <td><BsFillTrash3Fill/></td>
            </tr>
        )
    });

    return (
        <div className='main'>
            <div className='buttons'>
            <Button className='left__button'>
                <IoMdPerson className='left__button-logo'/>
                Preview</Button>
            <Button className='right__button'>
                <AiOutlinePlus className='right__button-logo'/>
                Add product
            </Button>
            </div>
            <div className='table__box'>
                <h1>Products</h1>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price($)</th>
                        </tr>
                        {setProduct}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Table;