import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Context from 'state/Context'
import SellerPage from 'pages/SellerPage'
import WelcomePage from 'pages/WelcomePage'

export default class App extends React.PureComponent {
  state = {
    search: {
      query: '',
      isSearching: false
    },
    productsList: {
      data: {
        results: []
      }
    },
    seller: {
      nickname: ''
    },

    // Search setters.
    setSearchQuery: query =>
      this.setState({
        search: {
          query: query,
          isSearching: true
        }
      }),
    setIsSearching: isSearching =>
      this.setState({
        search: {
          query: this.state.search.query,
          isSearching: isSearching
        }
      }),

    // Product list setters.
    setProductsData: data =>
      this.setState({
        productsList: { data }
      }),

    // Seller setters.
    setSeller: seller => this.setState({ seller })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Router>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/:sellerId/:query" exact component={SellerPage} />
          <Route path="/:sellerId" exact component={SellerPage} />
        </Router>
      </Context.Provider>
    )
  }
}
