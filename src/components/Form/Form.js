import './Form.css';
import Input from '../Input/Input';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
// import Button from '../Button/Button';
import { Localhost_URL } from '../../https/https';
// import { URL_API } from '../../https/https';


const Form = () => {
    const [visiblePassword, setVisiblePassword] = useState('password'); 
    const [isLoginEmpty, setIsLoginEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
      const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

    const handleClick = (event) => {
        event.preventDefault()
        setVisiblePassword(prevVisiblePassword => !prevVisiblePassword);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addUser(event)

        if (!login) {
            setIsLoginEmpty(true)
        } else {
            
        }
        if (!password) {
            setIsPasswordEmpty(true)
        } 
    }

    const handleChange = (event) => {

        if (event.target.name === 'Login') {
            setLogin(event.target.value);
            setIsLoginEmpty(false)
        }

        if (event.target.name === 'Password') {
            setPassword(event.target.value);
            setIsPasswordEmpty(false)
        }
    }

    const addUser = async (event) => {
        event.preventDefault()
        setIsInvalid(false)
        if (login === "qwerty" && password === "777") {
            const config = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login, password })
            };

            const response = await fetch(`${Localhost_URL}/login`, config);
            const data = await response.json();
            localStorage.setItem("jwt", data.jwt)
        } else {
            setIsInvalid(true)
        }



    // setLogin('')
    // setPassword('')
}


    return (
        <form className='login__block' onSubmit={ handleSubmit } >
            <Input name='Login'  handleChange={handleChange} value={login} type='text' placeholder='   User name' className='input' />
            {isLoginEmpty && <span className='login__span'>Enter login</span>}
            <Input name='Password'  handleChange={handleChange} value={password} type={visiblePassword ? 'password' : 'text'} placeholder='   Password' className='input' />
            {isPasswordEmpty && <span className='password__span'>Enter Password</span>}
            <button className='eye' onClick={handleClick}>{ visiblePassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
            <Input type='submit' value='Send' className='input__submit' />
            {isInvalid && <span className='log-pas__span'>Invalid</span>}
        </form>
    )
}

export default Form;