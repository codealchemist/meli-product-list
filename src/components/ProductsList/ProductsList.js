import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const sellerId = '51776267'

function getProducts () {
  const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${sellerId}`
  return fetch(url).then(response => response.json())
}

function getImageData (src) {
  return fetch(src).then(response => response.blob())
}

export default class ProductsList extends React.PureComponent {
  state = {
    data: {
      results: []
    }
  }

  componentDidMount () {
    getProducts().then(data => {
      console.log('DATA', data)
      this.setState({data})
    })
  }

  render () {
    const { results } = this.state.data

    return <div>
      PRODUCTS LIST
      { results.map(product => (
        <Product {...product} />
      ))}
    </div>
  }
}