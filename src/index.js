import React from 'react';
import ReactDom from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}








//react v18
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);
