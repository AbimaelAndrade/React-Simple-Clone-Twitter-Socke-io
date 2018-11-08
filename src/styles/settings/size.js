import { createGlobalStyle } from "styled-components";

const GlobalSize = createGlobalStyle`
  :root {
    --font-size-small: 14px;
    --font-size-mediumn: 16px;
    --spacing-small: 10px;
    --spacing-medium: 20px;
    --spacing-big: 40px;
    --radius: 5px;
  }
`;

export default GlobalSize;