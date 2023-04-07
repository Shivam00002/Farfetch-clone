import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 50px;
  background: rgb(34, 34, 34);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: right;
  text-align: left;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }
`;
export const Link = styled.div`
  color: white;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;
export const Icon = styled.div`
  display: flex;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  line-height: 22px;
  vertical-align: baseline;
`;
