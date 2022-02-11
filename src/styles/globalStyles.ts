import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-gray: #051932;
  --color-violet: #808080;
  --color-white: #fffcee;
}

body {
  background-color: var(--color-violet);
}
`;
