import Section from "../../components/Section/Section.jsx";
import {useNavigate} from "react-router";

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (value) => {
        return navigate(`/items?q=${value}`);
    }

    return (
        <Section onSearch={handleSearch}/>
    );
}

export default Home;