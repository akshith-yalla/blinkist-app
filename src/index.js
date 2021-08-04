import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import Header from './components/molecules/Header/header';
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <Header />,
  document.getElementById('app')
);
 
module.hot.accept();