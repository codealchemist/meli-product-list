import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SellerPage from 'pages/SellerPage'
import WelcomePage from 'pages/WelcomePage'

function App() {
  return (
    <Router>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/:sellerId" exact component={SellerPage} />
    </Router>
  )
}

export default App
