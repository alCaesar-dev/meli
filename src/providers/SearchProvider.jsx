import {createContext, useContext, useState} from "react";
import {getQueryParam} from "../utils/url.js";

const SearchContext = createContext(null);

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({children}) => {
    const [value, setValue] = useState(getQueryParam("search") ?? "");

    return (
        <SearchContext.Provider value={{value, setValue}}>
            {children}
        </SearchContext.Provider>
    );
};