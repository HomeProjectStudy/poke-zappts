import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { DataProps } from "../../interfaces/PokemonDTO";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 60px;
`;
export const Header = styled.View`
  width: 60%;
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
  flex: 1;
  margin-horizontal: 15px;
  margin-top: 40px;
`;
export const CardList = styled(
  FlatList as new (props: FlatListProps<DataProps>) => FlatList<DataProps>
)``;
