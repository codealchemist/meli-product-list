import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 90px auto 90px;
  cursor: pointer;

  &:hover {
    :before {
      content: '';
      background: rgba(0,0,0,0.75);
      position: absolute;
      right: 0;
      width: 10px;
      height: 100%;
    }
  }

  h3 {
    font-size: 1em;
    font-weight: normal;
  }
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat';
  font-size: 1.3rem;
`

const Image = styled.div`
  display: flex;
`

export default class Product extends React.PureComponent {
  render() {
    const {
      id,
      site_id,
      title,
      seller,
      price,
      currency_id,
      available_quantity,
      sold_quantity,
      buying_mode,
      listing_type_id,
      stop_time,
      condition,
      permalink,
      thumbnail,
      accepts_mercadopago,
      installments,
      address,
      shipping,
      seller_address,
      attributes,
      original_price,
      category_id,
      official_store_id,
      catalog_product_id,
      reviews,
      tags
    } = this.props

    return (
      <Wrapper>
        <Image>
          <img src={thumbnail} />
        </Image>
        <h3>{title}</h3>
        <Price>
          <p>${price}</p>
        </Price>
      </Wrapper>
    )
  }
}