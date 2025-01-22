import ButtonView from "./ButtonView";

const Button = ({onClick, children, className}) => {

    const handleClick = () => {
        if (onClick) onClick();
    }

    return (
        <ButtonView
            className={className}
            onClick={handleClick}
            children={children}
        />
    );
}

export default Button;