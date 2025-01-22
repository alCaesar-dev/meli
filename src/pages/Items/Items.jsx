import React, {useEffect, useState} from 'react';
import styles from "./Items.module.scss";
import ListItem from "../../components/ListItem/ListItem";
import useItems from "../../hooks/useItems.jsx";
import {useSearch} from "../../providers/SearchProvider.jsx";
import Section from "../../components/Section/Section.jsx";
import {getQueryParam} from "../../utils/url.js";

const Items = () => {
    const {getAll, isLoading} = useItems();
    const {value} = useSearch();
    const [data, setData] = useState([]);

    const getData = () => {
        if (!value) return;
        getAll(value)
            .then(({data}) => {
                setData(data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const valueToUse = value ?? getQueryParam("search");
        getData(valueToUse);
    }, []);

    return (
        <Section
            categories={data.categories ?? []}
            onSearch={getData}
            isLoading={isLoading} className={styles.section}>
            {!data.items?.length && !isLoading ? "No se encontraron registros" : ""}
            {data?.items?.map((item) => <ListItem key={item.id} item={item}/>)}
        </Section>
    );
}

export default Items;