import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store/index'
import RouterPage from './router'
import $z from 'z-formatter'
import './index.scss'


require('http://at.alicdn.com/t/font_1196994_did4jv5v2ai.js')
require('http://at.alicdn.com/t/font_1196994_did4jv5v2ai.css')

// $z.setCookie('uuid','')

ReactDOM.render(<Provider store={store}><RouterPage /></Provider>, document.getElementById('root'));

