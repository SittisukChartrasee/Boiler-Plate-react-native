import React from 'react'
import { Provider } from 'react-redux'
import nonStatic from 'hoist-non-react-statics'
import store from '../redux/store'

export default (Wrappercomponents) => {
  const Enhance = props => (
    <Provider store={store}>
      <Wrappercomponents {...props} />
    </Provider>
  )

  nonStatic(Enhance, Wrappercomponents)
  return Enhance
}