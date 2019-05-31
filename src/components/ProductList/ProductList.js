import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import Product from './Product'
import { getProducts } from 'services/meli-api'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #eee;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: white;
`

export default class ProductsList extends React.PureComponent {
  state = {
    data: {
      results: []
    }
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = (offset) => {
    console.log('-- load products', offset)
    getProducts(offset).then(data => {
      // Load more, append new products.
      if (offset) {
        this.setState({
          data: {
            ...this.state.data,
            paging: data.paging,
            results: this.state.data.results.concat(data.results)
          }
        })
        return
      }

      // First load.
      this.setState({ data })
    })
  }

  loadMoreProducts = () => {
    console.log('LOAD MORE...')
    const { paging } = this.state.data
    if (!paging) return
    if (!this.hasMoreProducts()) return

    const { offset, limit } = paging
    const nextOffset = offset + limit
    console.log('LOAD MORE, next offset:', nextOffset)
    this.loadProducts(nextOffset)
  }

  hasMoreProducts = () => {
    const { paging } = this.state.data
    if (!paging) return false

    const { total, offset, limit } = paging
    return (offset + limit < total)
  }

  render() {
    const { results } = this.state.data

    return (
      <Wrapper>
        <List>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMoreProducts}
            hasMore={this.hasMoreProducts}
            loader={<div className="loader" key={0}>Loading Products...</div>}
          >
            {results.map(product => (
              <Product {...product} />
            ))}
          </InfiniteScroll>
        </List>
      </Wrapper>
    )
  }
}