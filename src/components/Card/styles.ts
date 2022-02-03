import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { DataProps } from "../../interfaces/PokemonDTO";

export const Container = styled.View`
  flex: 1;
`;
export const Wrapper = styled(RectButton)`
  width: 100%;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.green}
  height: 150px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 25px;
`;
export const PokeImage = styled.Image`
  width: 120px;
  height: 120px;
`;
export const FooterTitle = styled.View`
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
