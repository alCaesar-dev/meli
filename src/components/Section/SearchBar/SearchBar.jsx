import styles from './SearchBar.module.scss';
import Input from "../../../components/Input/Input";
import logo from "../../../assets/images/Logo_ML.png";
import searchIcon from "../../../assets/images/ic_Search.png";
import {useNavigate} from "react-router";
import {useSearch} from "../../../providers/SearchProvider.jsx";

const SearchBar = ({onSearch}) => {
    const navigate = useNavigate();
    const {setValue, value} = useSearch();

    const handleClickLogo = () => {
        setValue("");
        return navigate("/");
    }

    const handleOnSearch = () => {
        if (!value) return;
        if (onSearch) onSearch(value);
        return navigate(`/items?search=${value}`);
    }

    return (
        <div className={styles?.container}>
            <div className={styles?.subContainer}>
                <img className={styles.logo} src={logo} onClick={handleClickLogo} alt="Logo Mercado Libre"/>
                <div className={styles?.searchContainer}>
                    <Input
                        onKeyUp={handleOnSearch}
                        onChangeValue={setValue}
                        value={value}
                        placeholder={"Nunca dejes de buscar"}
                        classNames={{container: styles?.input}}
                    />
                    <button onClick={handleOnSearch} className={styles?.searchButton}>
                        <img src={searchIcon} alt={"Icono de busqueda"}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;