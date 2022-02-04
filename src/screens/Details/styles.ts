import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 60px;
`;
export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Content = styled.View`
  width: 100%;
  padding: 15px 15px;
`;
export const ContentBoxPokemon = styled.View`
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.green};

  align-items: center;

  margin-bottom: 20px;
`;

export const PokeImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const PokeName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
