import React from "react";

import { View } from "react-native";
import { DataProps } from "../../interfaces/PokemonDTO";

import { Container, Wrapper, PokeImage, FooterTitle, Title } from "./styles";

export function Card({ data, ...rest }: DataProps) {
  const pokemonIndex = data.url.split("/")[6];

  return (
    <Container {...rest}>
      <Wrapper>
        <PokeImage
          source={{
            uri: `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`,
          }}
          resizeMode="contain"
        />
        <FooterTitle>
          <Title>{data.name}</Title>
        </FooterTitle>
      </Wrapper>
    </Container>
  );
}
