import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM : 제일 상위에 컴포넌트를 연결해주는 것
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// root라는 아이디를 가진 요소에
// 우리의 제일 상위에 있는 App이라는 컴포넌트를 연결하는거다.