import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';
import './libs/lightbox-touch.js';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/services" element={<Main/>} />
            <Route path="/work" element={<Main/>} />
            <Route path="/about" element={<Main/>} />
            <Route path="/contact" element={<Main/>} />
            <Route path="*" element={<Main/>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
