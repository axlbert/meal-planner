import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
	reducer,
	//if the redux devtools lives on our window object, invoke it so we can use redux devtools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

console.log(store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
