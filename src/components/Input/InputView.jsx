import styles from "./Input.module.scss";

const Input = ({value, onChange, placeholder, onKeyUp, classNames = {}}) => {

    return (
        <div className={`${styles.container} ${classNames.container}`}>
            <input
                onKeyUp={onKeyUp}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`${styles.input} ${classNames.input}`}
            />
        </div>
    );
}

export default Input;