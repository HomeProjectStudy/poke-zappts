import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;
export const Title = styled.Text`
  font-size: 64px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
