import React, { Component } from 'react';

import LoginWrapper, { Form, Input, Button } from './styles';
import { ReactComponent as LogoTwitter } from '../../assets/twitter.svg';

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoTwitter />
        <Form>
          <Input placeholder="Nome do usuário"/>
          <Button>Entrar</Button> 
        </Form>
      </LoginWrapper>
    )
    
  }
}
