import React, {useEffect, useState} from 'react';
import styles from "./Item.module.scss";
import Button from "../../../components/Button/Button";
import Section from "../../../components/Section/Section.jsx";
import useItems from "../../../hooks/useItems.jsx";
import {useParams} from "react-router";
import {getCurrency} from "../../../utils/string.js";
import {formatNumber} from "../../../utils/number.js";
import Image from "../../../components/Image/Image.jsx";
import MetaTags from "../../../components/MetaTags.jsx";

const Item = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const {get, isLoading} = useItems();
    const isNew = item.condition === "new";
    const hasSales = item.sold_quantity > 0;

    useEffect(() => {
        get(id)
            .then(({data}) => setItem(data.item))
            .catch(({message}) => console.log(message));
    }, []);

    return (
        <Section
            metaTags={
                <MetaTags
                    description={item.title}
                    keywords={item.title}
                    ogTitle={`${item.title} a solo ${item.price?.amount} `}
                />
            }
            isLoading={isLoading}
            className={styles.section}>
            {item.title ?
                <div className={styles.headContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={item.picture} alt={`Imagen de ${item.picture}`} className={styles.image}></Image>

                        <div className={styles.descriptionContainer}>
                            <h3 className={styles.descriptionTitle}>Descripcion del producto</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>

                    <div className={styles.itemDetail}>
                        <p className={styles.new}>
                            {isNew ? "Nuevo " : ""}
                            {isNew && hasSales ? " - " : ""}
                            {hasSales ? `${item.sold_quantity} vendidos` : ""}
                        </p>
                        <p className={styles.name}>{item.title}</p>
                        <p className={styles.amount}>{getCurrency(item?.price?.currency)} {formatNumber(item?.price?.amount)}</p>
                        <Button>Comprar</Button>
                    </div>
                </div> : ""}
        </Section>
    );
}

export default Item;