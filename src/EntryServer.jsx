import {StaticRouter} from 'react-router';
import App from './App';
import {StrictMode} from "react";

export function render(url, data) {
    return (
        <StrictMode>
            <StaticRouter location={url}>
                <App data={data}/>
            </StaticRouter>
        </StrictMode>
    );
}