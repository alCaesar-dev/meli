import styles from "./Section.module.scss";
import Categories from "./Categories/Categories.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Spinner from "../Spinner/Spinner.jsx";

const Section = ({children, categories = [], onSearch, className, isLoading = false}) => {
    return (
        <>
            <SearchBar onSearch={onSearch}/>

            {isLoading ? <Spinner/> : (
                <div className={`${styles.container}`}>
                    <Categories data={categories}/>
                    {children && (
                        <div className={`${styles.subContainer} ${className}`}>
                            {children}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Section;
