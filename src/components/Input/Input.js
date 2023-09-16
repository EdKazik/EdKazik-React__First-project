import "./Input.css";

const Input = ({
  type,
  placeholder,
  value,
  className,
  handleChange,
  name,
  onClick,
}) => {
  return (
    <label className="input__label">
      <input
        name={name}
        onChange={handleChange}
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
