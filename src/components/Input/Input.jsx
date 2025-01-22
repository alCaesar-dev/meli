import InputView from "./InputView";

const Input = ({value, onChangeValue, placeholder, classNames, onKeyUp}) => {

    const handleChange = (event) => {
        if (onChangeValue) onChangeValue(event.target.value);
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && onKeyUp) {
            onKeyUp();
        }
    }

    return (<InputView
            onKeyUp={handleKeyUp}
            classNames={classNames}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}/>);
}

export default Input;