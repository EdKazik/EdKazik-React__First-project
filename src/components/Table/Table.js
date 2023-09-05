import './Table.css';
import Button from '../Button/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Table = ({ products, className , onClick }) => {

    const leftButtonNavigate = useNavigate();

    const leftButtonClick = () => {
        leftButtonNavigate('/products-preview')
        console.log('left button is OK!!!')
    }

    const productsElements = products.map(el => {
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
    })

    return (
        <div className='main'>
            <div className='buttons'>
            <Button className='left__button' onClick={leftButtonClick}>
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
                            <th>Price(₴)</th>
                        </tr>
                        {productsElements}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;