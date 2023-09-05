import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Edit from './Edit';
import Quills from './Quill';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Toolbar /> */}
    {/* <Edit /> */}
    <Quills />
  </React.StrictMode>
);

