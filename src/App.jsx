import {Route, Routes} from "react-router";
import Items from "./pages/Items/Items";
import "./assets/styles/main.scss";
import {SearchProvider} from "./providers/SearchProvider.jsx";
import Home from "./pages/Home/Home.jsx";
import Item from "./pages/Items/Item/Item.jsx";
import {useEffect, useState} from "react";
import * as ReactHelmet from 'react-helmet-async';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const helmetContext = {};

    //Esto es por si se carga mas rapido el HTML que el CSS
    useEffect(() => {
        const checkCSSLoaded = () => {
            if (document.styleSheets.length > 0) {
                setIsLoaded(true);
            } else {
                setTimeout(checkCSSLoaded, 100);
            }
        };
        checkCSSLoaded();
    }, []);

    if (!isLoaded) {
        return null;
    }

    return (
        <ReactHelmet.HelmetProvider  context={helmetContext}>
            <SearchProvider>
                <Routes>
                    <Route
                        path={"/"}
                        element={<Home/>}
                    />

                    <Route
                        path={"/items"}
                        element={<Items/>}
                    />

                    <Route
                        path={"/items/:id"}
                        element={<Item/>}
                    />
                </Routes>
            </SearchProvider>
        </ReactHelmet.HelmetProvider>
    );
}

export default App;