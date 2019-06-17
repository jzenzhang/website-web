import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store/index'
import RouterPage from './router'
import './index.scss'

ReactDOM.render(<Provider store={store}><RouterPage /></Provider>, document.getElementById('root'));

