import React from 'react'
import styled from 'styled-components'
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
    getProducts().then(data => {
      console.log('DATA', data)
      this.setState({ data })
    })
  }

  render() {
    const { results } = this.state.data

    return (
      <Wrapper>
        <List>
          {results.map(product => (
            <Product {...product} />
          ))}
        </List>
      </Wrapper>
    )
  }
}