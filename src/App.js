import React from 'react';
import registerScreen, { beforLogin } from './config/router'

export default class extends React.Component {
  constructor(props) {
    super(props)

    registerScreen()
    beforLogin()
  }
}

