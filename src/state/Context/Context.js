import React from 'react'
const Context = React.createContext()
export default Context

export const withContext = Component =>
  class WithContext extends React.PureComponent {
    render() {
      return (
        <Context.Consumer>
          {context => <Component context={context} {...this.props} />}
        </Context.Consumer>
      )
    }
  }
