import React from 'react';
import './App.css';
import IndexPage from "../Pages/index";
import Header from "../Components/Header/Header";

function App() {
    return (
        <div className='App'>
            <Header />
            <IndexPage />
        </div>
    );
}

export default App;
