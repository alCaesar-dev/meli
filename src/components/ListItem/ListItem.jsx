import styles from "./ListItem.module.scss";
import truck from "./../../assets/images/ic_shipping.png";
import {formatNumber} from "../../utils/number.js";
import {useNavigate} from "react-router";
import {getCurrency} from "../../utils/string.js";
import Image from "../Image/Image.jsx";

const ListItem = ({item}) => {
    const {id, picture, price, freeShipping, location, title} = item;
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(`${id}`)} className={styles.item}>

            <Image className={styles.itemImage} src={picture} alt={`Imagen de ${title}`}/>

            <div className={styles.itemDetails}>
                <div className={styles.priceContainer}>
                    <p className={styles.price}>{getCurrency(price.currency)} {formatNumber(price.amount)}</p>
                    {freeShipping && (
                        <img className={styles.shippingIcon} alt="Con envío" src={truck}/>
                    )}
                </div>

                <p className={styles.productName}>{title}</p>
            </div>

            <p className={styles.productLocation}>{location}</p>
        </button>
    );
};

export default ListItem;
