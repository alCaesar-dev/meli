import Section from "../../components/Section/Section.jsx";
import {useNavigate} from "react-router";
import MetaTags from "../../components/MetaTags.jsx";

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (value) => {
        return navigate(`/items?q=${value}`);
    }

    return (
        <Section
            onSearch={handleSearch}
            metaTags={
                <MetaTags
                    description={"Encuentra los productos que deseas comprar con esta barra de búsqueda."}
                    keywords={"buscar productos, compras, mercado libre, envíos gratis, tienda online, compra fácil, tienda nube, descuentos, ofertas"}
                    ogTitle={"Busca entre miles de productos con envíos gratis!"}
                />
            }
        />
    );
}

export default Home;