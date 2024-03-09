import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute } from './pages'




function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
     
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/product'>
        <Products />
      </Route>
      <Route exact path='/product/:id' children={<SingleProduct/>}/>
    
      <Route exact path='/checkout'>
        <Checkout />
      </Route>
      <Route path='*'>
        <Error />
      </Route>
     
     <Footer />
    </Router>
  )
}

export default App