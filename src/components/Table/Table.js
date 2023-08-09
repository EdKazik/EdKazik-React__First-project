import './Table.css';
import Button from '../Button/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrash3Fill } from 'react-icons/bs';


const Table = () => {

    return (
        <div className='main'>
            <div className='buttons'>
            <Button className='left__button'>
                <IoMdPerson className='left__button_logo'/>
                Preview</Button>
            <Button className='right__button'>
                <AiOutlinePlus className='right__button_logo'/>
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
                        <tr>
                            <td>0</td>
                            <td>PC</td>
                            <td>Lenovo Y50-70</td>
                            <td>5</td>
                            <td>25,000.00</td>
                            <td><BsFillPencilFill/></td>
                            <td><BsFillTrash3Fill/></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Clothes</td>
                            <td>Nike M Nk Df Acd21</td>
                            <td>22</td>
                            <td>4,000.00</td>
                            <td><BsFillPencilFill /></td>
                            <td><BsFillTrash3Fill /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Plumbing</td>
                            <td>Cersanit MITO 17</td>
                            <td>1337</td>
                            <td>5,000.00</td>
                            <td><BsFillPencilFill /></td>
                            <td><BsFillTrash3Fill/></td>
                        </tr>
                    </tbody>



                </table>
            </div>
            
        </div>
    )
}

export default Table;