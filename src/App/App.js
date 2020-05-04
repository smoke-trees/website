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
            <link rel='https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css'/>
            <Header />
        </div>
    );
}

export default App;
