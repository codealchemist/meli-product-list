import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import ReactLoading from 'react-loading'
import Product from './Product'
import SearchStatus from './SearchStatus'
import { getProducts } from 'services/meli-api'
import { withContext } from 'state/Context'
import { isValidQuery } from 'utils'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: white;
  padding-top: 5px;
`

const Loading = styled(ReactLoading)`
  margin: auto;
  padding-bottom: 15px;
`

export class ProductsList extends React.Component {
  state = {
    data: {
      results: []
    },
    query: ''
  }

  componentDidMount() {
    this.loadProducts()
  }

  componentDidUpdate() {
    console.log('ProductList UPDATED')
  }

  loadProducts = offset => {
    const { sellerId, context } = this.props
    let { query } = context.search
    query = query || this.props.query

    // Reset query if not valid.
    if (!isValidQuery(query)) query = ''

    const { productsList } = context
    getProducts({ sellerId, offset, query }).then(data => {
      // Load more, append new products.
      if (offset) {
        context.setProductsData({
          ...productsList,
          paging: data.paging,
          results: productsList.data.results.concat(data.results)
        })
        return
      }

      // First load.
      context.setProductsData(data)
    })
  }

  loadMoreProducts = () => {
    const { context } = this.props
    const { paging } = context.productsList.data
    if (!paging) return
    if (!this.hasMoreProducts()) return

    const { offset, limit } = paging
    const nextOffset = offset + limit
    this.loadProducts(nextOffset)
  }

  hasMoreProducts = () => {
    const { context } = this.props
    const { paging } = context.productsList.data
    if (!paging) return false

    const { total, offset, limit } = paging
    return offset + limit < total
  }

  render() {
    const { context } = this.props
    let { query } = context.search
    query = query || this.props.query
    const { results, paging } = context.productsList.data

    return (
      <Wrapper>
        <SearchStatus query={query} paging={paging} />
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

export default withContext(ProductsList)
