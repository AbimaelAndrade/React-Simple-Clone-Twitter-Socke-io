import { createGlobalStyle } from "styled-components";

const GlobalColors = createGlobalStyle`
  :root {
    --color-gray: #ddd;
    --color-white: #fff;
    --color-white-input: #e9f1f6;
    --color-border-textarea: #d8e5ed;
    --color-blue: #4bb0ee;
    --color-blue-hover: #42a1db;
  }
`;

export default GlobalColors;