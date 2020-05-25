import styled from 'styled-components';

export const JoinOutterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const JoinInnerContainer = styled.div`
  width: 100%;
  h1 {
    color: #fff;
    font-size: 2.5em;
    padding-bottom: 10px;
  }

  div {
    input {
      font-size: 1.5em;
      margin-top: 10px;
      border: 0;
      border-radius: 5px;
      padding: 10px;
    }
  }
`;

export const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  border-radius: 5px;
  border: 0;
  margin-top: 20px;
  width: 330px;
  height: 50px;
`;
