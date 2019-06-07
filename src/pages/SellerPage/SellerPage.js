import React from 'react'
import ProductList from 'components/ProductList'
import Header from 'components/Header'

export default class SellerPage extends React.PureComponent {
  render() {
    const { sellerId, query } = this.props.match.params

    return (
      <>
        <Header sellerId={sellerId} />
        <ProductList sellerId={sellerId} query={query} />
      </>
    )
  }
}
