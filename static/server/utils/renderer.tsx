import fs from 'fs';
import {Helmet} from 'react-helmet';
import serialize from 'serialize-javascript';

export default ({
    styles = [],
    scripts = [],
    html,
    store,
    styledTags,
}) => {
    const helmet = Helmet.renderStatic();

    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, ya-title=#62abff, ya-dock=fade">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="google" content="notranslate">
                
                <meta content="#62abff" name="msapplication-TileColor">
                <!-- Chrome, Firefox OS and Opera -->
                <meta name="theme-color" content="#62abff">
                <!-- Windows Phone -->
                <meta name="msapplication-navbutton-color" content="#62abff">
                <!-- iOS Safari -->
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="apple-mobile-web-app-status-bar-style" content="#62abff">
                
                <meta property="og:title" content="TRKIR">
                <meta property="og:description" content="BIG DATA FOR HEALTH AND WELLBEING">
                
                <title>TRKIR</title>
                <meta name="description" content="">
                
                <meta content="trkir" name="application-name">
                
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                
                <link rel="icon" type="image/svg+xml" href="/dist/favicons/favicon.png">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

                ${styledTags}
                ${styles.map(script => `<style rel="stylesheet">${fs.readFileSync(`dist/client/${script.file}`, 'utf-8')}</style>`).join('\n')}
            </head>

            <body>
                <div id="root">${html}</div>

                <script>window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g, '\\\u003c')}</script>
                ${scripts.map(script => `<script>${fs.readFileSync(`dist/client/${script.file}`, 'utf-8')}</script>`).join('\n')}
            </body>
        </html>`;
};
