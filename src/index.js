import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Index from '../src/Pages/index/index'
import Team from '../src/Pages/team/team'
import Projects from '../src/Pages/projects/project'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../src/Components/Header/Header'
import About from '../src/Pages/about/about'
import Contact from '../src/Pages/contact/contact'

const routing = (
  <Router>
    <Header index={Index} team={Team} projects={Projects} about={About} contact={Contact} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
