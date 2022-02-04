import React from "react";
import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { LineBox } from "../../components/LineBox";
import {
  Container,
  Header,
  Title,
  Content,
  ContentBoxPokemon,
  PokeImage,
  PokeName,
} from "./styles";

export function Details() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Title>Poke - Zappts</Title>
        <MaterialCommunityIcons
          name="pokeball"
          size={24}
          color={theme.colors.black}
        />
      </Header>
      <LineBox />
      <Content>
        <ContentBoxPokemon>
          <PokeImage
            source={{
              uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            }}
            resizeMode="contain"
          />
        </ContentBoxPokemon>
        <PokeName>Bulbasaur</PokeName>
      </Content>
    </Container>
  );
}
