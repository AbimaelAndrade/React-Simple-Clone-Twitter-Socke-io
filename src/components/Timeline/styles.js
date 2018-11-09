import styled from "styled-components"

import { flexColumn } from "../../styles/tools"

const TimeLineWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;

  ${flexColumn}
  align-items: center;
`

export const Form = styled.form`
  width: 100%;
  background: var(--color-white-input);
  padding: 20px;
  border-radius: var(--radius);
  margin: 30px 0;
`

export const TextArea = styled.textarea`
  border: 3px solid var(--color-border-textarea);
  background-color: var(--color-white);
  border-radius: var(--radius);
  font-size: var(--font-size-small);
  padding: 15px;
  width: 100%;
  resize: none;
`

export const ListTwitte = styled.ul`
  width: 100%;
  list-style: none;
  color: #1c2022;
`

export default TimeLineWrapper