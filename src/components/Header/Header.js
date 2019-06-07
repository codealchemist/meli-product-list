import React from 'react'
import styled from 'styled-components'
import Seller from 'components/Seller'
import Search from 'components/Search'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100%-10px);
  background: #fff159;
  height: 50px;
  padding: 0 5px;
  font-size: 2rem;
`

export default class Header extends React.PureComponent {
  render() {
    const { sellerId } = this.props

    return (
      <Wrapper>
        <Seller id={sellerId} />
        <Search sellerId={sellerId} />
      </Wrapper>
    )
  }
}
