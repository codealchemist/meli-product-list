import React from 'react'
import styled from 'styled-components'
import { isValidQuery } from 'utils'

const Wrapper = styled.div`
  padding: 5px;
`

export default class SearchStatus extends React.PureComponent {
  render() {
    const { query, paging } = this.props
    if (!paging) return null
    if (!isValidQuery(query)) return null

    return (
      <Wrapper>
        {!query && (
          <>
            <b>{paging.total}</b> publicaciones activas
          </>
        )}

        {query && (
          <>
            <b>{paging.total}</b> resultados para <b>{query}</b>
          </>
        )}
      </Wrapper>
    )
  }
}
