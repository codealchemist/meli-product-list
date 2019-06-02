import React from 'react'
import styled from 'styled-components'
import { getSeller } from 'services/meli-api'

const Wrapper = styled.div`
  display: flex;
`

export default class Seller extends React.PureComponent {
  state = {
    seller: {}
  }

  componentDidMount() {
    const { id } = this.props
    getSeller(id).then(seller => {
      this.setState({ seller })
    })
  }

  render() {
    const { seller } = this.state

    return <Wrapper>{seller.nickname}</Wrapper>
  }
}
