import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.grey};
  margin-top: 50px;
`;
