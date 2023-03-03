import styled from "styled-components";

/* const CardWrapper = styled.div<{ show: boolean }>`
  background-color: ${({ show }) => (show ? "#fff" : "#007bff")};
  color: ${({ show }) => (show ? "#007bff" : "#fff")};
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`; */

type CardProps={
  clicked: boolean,
}
export const Cards = styled.div(({clicked}: CardProps)=>(
  `background-color:  ${clicked ? 'transparent': '#007bff'};
  color: ${clicked ? 'black': '#fff'};
  width: 80%;
  border: 2px solid rgba(100,100,100,0.8);
  border-radius: 0.5rem;
  padding: 10px;
  font-size:1.25rem;
  text-align: center;
  cursor: pointer;
  `
))