import './Card.css';
import logo1 from '../../assets/logo1.svg';
import Form from '../Form/Form';

const Card = ({ imgClick }) => {
  return (
    <div className="card">
      <div className="img__login">
        <img src={logo1} alt="logo1" onClick={imgClick} />
      </div>
      <Form />
    </div>
  );
};

export default Card;