import React from 'react'
import styled from 'styled-components'
import Seller from 'components/Seller'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff159;
  height: 50px;
  margin-bottom: 5px;
  font-size: 2rem;
`

export default class Header extends React.PureComponent {
  render() {
    const { sellerId } = this.props

    return (
      <Wrapper>
        <Seller id={sellerId} />
      </Wrapper>
    )
  }
}
