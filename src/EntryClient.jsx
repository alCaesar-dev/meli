import {hydrateRoot} from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router";
import {StrictMode} from "react";

hydrateRoot(
    document.getElementById('root'),

    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);
