import "./Input.css";

const Input = ({
  type,
  placeholder,
  value,
  className,
  handleChange,
  name,
  onClick,
  handleChangeModal,
}) => {
  return (
    <label className="input__label">
      <input
        name={name}
        onChange={(handleChange, handleChangeModal)}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onClick={onClick}
      />
    </label>
  );
};

export default Input;
