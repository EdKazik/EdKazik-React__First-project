import './Form.css';
import Input from '../Input/Input';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
// import Button from '../Button/Button';

const Form = () => {
    const [visiblePassword, setVisiblePassword] = useState('password');
    const [visibleIcon, setVisibleIcon] = useState({ AiOutlineEye }); 
    
    const handleClick = (event) => {
        event.preventDefault()
        setVisibleIcon(prevVisibleIcon => !prevVisibleIcon)
        setVisiblePassword(prevVisiblePassword => !prevVisiblePassword)
    }

    return (
        <form className='login__block'>
            <Input type='text'  placeholder='   User name' className='input'/>
            <Input type={visiblePassword ? 'password' : 'text'} placeholder='   Password' className='input' />
            <button className='eye' onClick={handleClick}>{ visibleIcon ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
            <Input type='submit' value='Login' className='input__submit'/>
        </form>
    )
}

export default Form;