import React, { Component } from 'react';

import LoginWrapper, { Form, Input, Button } from './styles';
import { ReactComponent as LogoTwitter } from '../../assets/twitter.svg';

export default class Login extends Component {

  state = {
    username: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { username } = this.state

    if(!username.length) return

    localStorage.setItem('@CloneTwitter:username', username)
    this.props.history.push('/timeline')
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  render() {

    const { username }= this.state
    return (
      <LoginWrapper>
        <LogoTwitter />
        <Form onSubmit={this.handleFormSubmit}>
          <Input 
            value={ username }
            onChange={this.handleInputChange } 
            placeholder="Nome do usuário"
          />
          <Button>Entrar</Button> 
        </Form>
      </LoginWrapper>
    )
    
  }
}
