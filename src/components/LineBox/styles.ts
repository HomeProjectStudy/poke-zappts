import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px;
  border-color: ${({ theme }) => theme.colors.grey};
  margin-top: 50px;

  shadow-color: #000;
  shadow-offset: {width: 0, height: 0};
  shadow-opacity: 0.3;
  elevation: 6;
`;
