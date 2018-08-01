import React from 'react';
import store from './redux/store'
import * as actions from './redux/actions/Aroot'
import registerScreen, { beforLogin } from './config/router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    registerScreen()
    store.subscribe(this.storeUpdate)
    store.dispatch(actions.appInitialized())
  }

  storeUpdate = () => {
    const { root } = store.getState().root
    if (this.currentRoot !== root) {
      this.currentRoot = root
      this.startApp(root)
    }
  }

  startApp = (root) => {
    switch (root) {
      case 'beforlogin':
        beforLogin()
        break
    
      default:
        alert('not found')
        break
    }
  }
}

