import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { withContext } from 'state/Context'
import { getProducts } from 'services/meli-api'
import { isValidQuery } from 'utils'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  input {
    height: 39px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 2px;
    background-color: white;
    border: 0 rgba(0, 0, 0, 0.2);
    color: black;
    font-size: 16px;
    margin: 0;
    width: 200px;

    &::placeholder {
      color: #ccc;
    }
  }

  div {
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
`

class Search extends React.PureComponent {
  state = {
    query: null
  }

  search = () => {
    let { query } = this.state
    query = query || ''
    query = query.trim()
    if (!query) return null

    // Reset query if not valid.
    if (!isValidQuery(query)) query = ''

    const { sellerId, history, context } = this.props

    // Set search query and searching state.
    context.setSearchQuery(query)

    // Redirect to Results Page.
    history.push(`/${sellerId}/${query}`)

    // Get products.
    getProducts({ sellerId, query }).then(data => {
      // Update searching state and products data.
      context.setIsSearching(false)
      context.setProductsData(data)
    })
  }

  onChange = e => this.setState({ query: e.target.value })

  onKey = ({ key }) => {
    if (key !== 'Enter') return
    this.search()
  }

  render() {
    return (
      <Wrapper>
        <input
          type="search"
          placeholder="Buscar publicaciones"
          maxLength="120"
          autoFocus
          onChange={this.onChange}
          onKeyPress={this.onKey}
        />
        <div onClick={this.search}>🔍</div>
      </Wrapper>
    )
  }
}

export default withContext(withRouter(Search))
