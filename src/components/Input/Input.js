import './Input.css'

const Input = (props) => {

    return (
        <label className='input__label'>
            <input type={props.type} placeholder={props.placeholder} value={props.value} className={props.className} disabled={props.disabled} />
        </label>
        
    )
}

export default Input;