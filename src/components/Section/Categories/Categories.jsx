import styles from "./Categories.module.scss";

const Categories = ({data = []}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
                {data.map((part, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            <span className={`${styles.item} ${index === data.length - 1 && styles.active}`} aria-current="page">{part}</span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Categories;