import React, { Component } from 'react';
import api from '../../services/api'
import socket from 'socket.io-client'

import TimeLineWrapper, { Form, TextArea, ListTwitte } from './styles';
import { ReactComponent as LogoTwitter } from '../../assets/twitter.svg';
import Twitte  from '../Twitte'

export default class Timeline extends Component {

  state = {
    twitters: [],
    newTwitter: ''
  }

  async componentDidMount() {
    this.subscribeToEvents()
    const response = await api.get('twitters') 

    this.setState({
      twitters: response.data
    })
  }

  handleNewTwitter = async (event) => {
      
      if(event.keyCode !== 13) return

      const content = this.state.newTwitter
      const author  = localStorage.getItem('@CloneTwitter:username')
      await api.post('twitters', { author, content })
      this.setState({ newTwitter: '' })
  }

  handleInputChange = (event) => {
      this.setState({ newTwitter: event.target.value })
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:8001/')
    io.on('twitter', data => {
        this.setState({twitters: [ data, ...this.state.twitters ]})
    })

    io.on('twitter.like', data => {
      this.setState({twitters: this.state.twitters.map(twitte => {
        return twitte._id === data._id ? data : twitte
      })})
    })
  }

  render() {
    const { newTwitter, twitters } = this.state

    return (
      <TimeLineWrapper>
        <LogoTwitter height={24} alt="Logo Twitter"/>
        <Form>
          <TextArea 
            value={newTwitter}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTwitter}
            placeholder="O que está acontecendo?"
          />
        </Form>
        <ListTwitte>
          { twitters.map(twitte => (
            <Twitte  key={twitte._id} twitte={twitte}/>
          )) }
        </ListTwitte>
      </TimeLineWrapper>
    )
  }
}
