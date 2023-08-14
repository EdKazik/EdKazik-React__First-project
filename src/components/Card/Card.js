import './Card.css';
import logo1 from '../../assets/logo1.svg';
import Form from '../Form/Form';

const Card = () => {
    return (
        <div className='card'>
            <div className='img'><img src={logo1} alt='logo1' /></div>
            <Form/>
        </div>
    )
};

export default Card;