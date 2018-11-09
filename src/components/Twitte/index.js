import React, { Component } from 'react';

import TwitteWrapper, { Paragraph, ButtonLike, ImgLike } from './styles'
import ImageLike from '../../assets/like.svg';
import api from '../../services/api'

export default class Twitte extends Component {

  handleLike = async (event) => {
    const { _id } = this.props.twitte

    await api.post(`likes/${_id}`) 
  } 

  render() {
    const { twitte } = this.props 

    return (
        <TwitteWrapper>
            <strong>{twitte.author}</strong>
            <Paragraph>{twitte.content}</Paragraph> 
            <ButtonLike onClick={this.handleLike}>
                <ImgLike src={ImageLike} alt="Like" />
                {twitte.likes}
            </ButtonLike>
        </TwitteWrapper>
    )
  }
}
