import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Details from './components/pages/Details'
import PageNotFound from './components/pages/PageNotFound'
import Products from './components/pages/Products'
 class App extends Component {
  render() {

    return (
      <div>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/details' component={Details}/>
            <Route path='/products' component={Products}/>
            <Route component={PageNotFound}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
