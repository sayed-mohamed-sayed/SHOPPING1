// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// // import { store } from "./redux/store";
// // import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<React.StrictMode>
// 			<App />

// 	</React.StrictMode>
// );


import React from "react";
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App'
import { Provider } from "react-redux";
import {store} from './store'


ReactDom.render(
	<React.StrictMode>
	<Provider store={store}>
	<App />
	</Provider>
</React.StrictMode>


,document.getElementById('root')



)