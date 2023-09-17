import "./Login.css";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const imgClick = () => {
    navigate("/products-table");
  };
  return (
    <div className="container">
      <Card imgClick={imgClick} />
    </div>
  );
}

export default Login;
