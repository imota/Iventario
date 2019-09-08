import styled from "styled-components";

const DefaultInput = styled.input`
  width: 80%;
  margin: 10px auto;
  height: 50px;
  background: transparent;
  border: none;
  box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.2);
  text-align: center;
  border-radius: 20px;
  color: #fff;

  ::placeholder {
    color: #fff;
  }
`;

export default DefaultInput;
