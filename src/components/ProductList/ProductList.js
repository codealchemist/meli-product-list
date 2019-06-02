import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import ReactLoading from 'react-loading'
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

const Loading = styled(ReactLoading)`
  margin: auto;
  padding-bottom: 15px;
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

  loadProducts = offset => {
    const { sellerId } = this.props
    console.log(`-- load products for '${sellerId}', offset '${offset}'`)
    getProducts(sellerId, offset).then(data => {
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
    return offset + limit < total
  }

  render() {
    const { results } = this.state.data

    return (
      <Wrapper>
        <List>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMoreProducts}
            hasMore={this.hasMoreProducts()}
            loader={<Loading key="loader" type="spin" color="black" />}
          >
            {results.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </InfiniteScroll>
        </List>
      </Wrapper>
    )
  }
}
