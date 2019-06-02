import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  height: 100%;
  background: #fff159;

  input {
    padding: 10px;
    width: 90%;
    font-size: 18vw;
    text-align: center;
  }
`

export class Welcome extends React.PureComponent {
  state = {
    sellerId: ''
  }

  onSellerIdChange = event => {
    this.setState({ sellerId: event.target.value })
  }

  onKey = ({ key }) => {
    if (key !== 'Enter') return
    const { history } = this.props
    history.push(`/${this.state.sellerId}`)
  }

  render() {
    return (
      <Wrapper>
        <h3>
          Ingresá el <b>seller id</b> para ver su listado de productos:
        </h3>
        <input
          type="number"
          maxLength="12"
          value={this.state.sellerId}
          onChange={this.onSellerIdChange}
          onKeyPress={this.onKey}
          autofocus="true"
        />
      </Wrapper>
    )
  }
}

export default withRouter(Welcome)
