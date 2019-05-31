import React from 'react'
import styled from 'styled-components'

const ProductWrapper = styled.div`
  display: flex;
`

export default class Product extends React.PureComponent {
  render () {
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
      <ProductWrapper>
        <img src={thumbnail} />
        <h3>{title}</h3>
        <p>AR$ {price}</p>
      </ProductWrapper>
    )
  }
}