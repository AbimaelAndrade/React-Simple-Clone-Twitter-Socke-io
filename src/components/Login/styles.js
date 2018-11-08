import styled from "styled-components"

import { flexColumnCenter, flexColumn, transitionAnimate } from "../../styles/tools"

const LoginWrapper = styled.div`
  height: 100%;
  ${flexColumnCenter}
`

export const Form = styled.form`
  margin: 20px 0 0;
  width: 100%;
  max-width: 280px;
  ${flexColumn}
  align-items: stretch;
`

export const Logo = styled.img`
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: var(--radius);
  height: 44px;
  padding: 0 15px;
  font-size: var(--font-size-small);
`

export const Input = styled.input`
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: var(--radius);
  height: 44px;
  padding: 0 15px;
  font-size: var(--font-size-small);
`

export const Button = styled.button`
  margin: 10px 0 0;
  background: var(--color-blue);
  border-radius: 5px;
  height: 44px;
  border: 0;
  color: var(--color-white);
  font-weight: bold;
  cursor: pointer;
  font-size: var(--font-size-mediumn);
  ${transitionAnimate}

  &:hover {
    background: var(--color-blue-hover);
  }
`

export default LoginWrapper