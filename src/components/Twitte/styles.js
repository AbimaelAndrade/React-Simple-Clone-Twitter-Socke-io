import styled from "styled-components"

const TwitteWrapper = styled.li`
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 1px solid #eee;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border: 0;
  } 
`

export const Paragraph = styled.p`
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
`

export const ButtonLike = styled.button`
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;
  color: #697882;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const ImgLike = styled.img`
  margin-right: 5px;
`

export default TwitteWrapper