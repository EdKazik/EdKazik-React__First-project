import './Card.css';
import Input from '../Input/Input';
import logo1 from '../../assets/logo1.svg';
// import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

const Card = () => {
    return (
        <div className='card'>
            <div className='img'><img src={logo1} alt='logo1' /></div>
        <div className='login__block'>
            <Input type='text'  placeholder='   User name' className='input'/>
            <Input type='password' placeholder='   Password' className='input' />
            <AiOutlineEyeInvisible className='closed__eye' />
            {/* <AiOutlineEye className='opened__eye'/> */}
            <Input type='submit' value='Login' className='input__submit'/>
        </div>
        </div>
    )
};

export default Card;