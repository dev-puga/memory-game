import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const CardContent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 160px;
  margin: 1rem;
  border: 3px solid var(--color-white);
  background-color: var(--color-gray);

  cursor: pointer;
`;
