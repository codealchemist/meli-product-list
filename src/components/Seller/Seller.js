import React from 'react'
import styled from 'styled-components'
import { getSeller } from 'services/meli-api'

const Wrapper = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: black;
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
    const { id } = this.props
    const url = `/${id}`

    return (
      <Wrapper title={seller.nickname} href={url}>
        {seller.nickname}
      </Wrapper>
    )
  }
}
