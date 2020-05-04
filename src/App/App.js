import React from 'react';
import './App.css';
import Router from "react-router-dom/BrowserRouter";
import Switch from "react-router-dom/Switch"
import Route from "react-router-dom/Route"
import IndexPage from "../Pages/index";
import ProjectPage from "../Pages/projects/project";
import TeamPage from "../Pages/trees/trees";
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
