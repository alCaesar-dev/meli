import styles from "./Button.module.scss";

const ButtonView = ({onClick, children, className}) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default ButtonView;