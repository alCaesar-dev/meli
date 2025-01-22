import fs from 'node:fs/promises'
import express from 'express'
import dotEnv from 'dotenv';
import {renderToString} from 'react-dom/server';
import routes from "./server/routes.js";

//Levanto el env
dotEnv.config();

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 4000
const base = '/'
const app = express()

// Instancio el html de produccion
const templateHtml = isProduction && await fs.readFile('./dist/client/index.html', 'utf-8');

let vite;
if (!isProduction) {
    const {createServer} = await import('vite');
    vite = await createServer({
        server: {middlewareMode: true},
        appType: 'custom',
        base,
    })
    app.use(vite.middlewares);
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression());
    app.use(base, sirv('./dist/client', {extensions: []}));
}

app.use(routes);

app.get('*all', async (req, res) => {
    try {
        const url = req.originalUrl;

        let template;
        let render;

        if (!isProduction) {
            // Lee la plantilla de desarrollo
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('/src/EntryServer.jsx')).render;
        } else {
            //
            template = templateHtml;
            render = (await import('./dist/server/EntryServer.js')).render;
        }

        const rendered = render(url);

        // Renderiza el HTML del componente
        const appHtml = renderToString(rendered);

        // Reemplaza el marcador por el contenido
        const html = template.replace(`<!--app-html-->`, appHtml);

        // Envia el HTML renderizado
        res.status(200).set({'Content-Type': 'text/html'}).send(html);
    } catch (e) {
        vite?.ssrFixStacktrace(e);
        console.error(e.stack);
        res.status(500).end(e.stack);
    }
});

// Levanto el servidor en el puerto
app.listen(port, () => {
    console.log(`El servidor se inicio en http://localhost:${port}`)
})