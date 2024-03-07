import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/stylesGlobal'
import Routes from './routes'

// RactDom significa que ele irá renderizar nossa aplicação do Appjs que será aplicado tudo na nossa div no index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Routes />, <GlobalStyle />
    </>);

    // Usamos o "fragment" <> </> para importar mais de um componente !