import React from 'react';
import { createRoot } from 'react-dom/client';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import './style.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/services" element={<Main/>} />
            <Route path="/work" element={<Main/>} />
            <Route path="/about" element={<Main/>} />
            <Route path="/contact" element={<Main/>} />
            <Route path="*" element={<Main/>} />
        </Routes>
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
