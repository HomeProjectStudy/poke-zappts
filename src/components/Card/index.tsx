import React from "react";

import { View } from "react-native";
import { DataProps } from "../../interfaces/PokemonDTO";

import { Container, Wrapper, PokeImage, FooterTitle, Title } from "./styles";

export function Card({ data }: DataProps) {
  return (
    <Container data={data}>
      <Wrapper>
        <PokeImage
          source={{
            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gvr-d1a822f4-cb27-46b3-a0ad-5538b486b6f5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmNjE5ZWQwLWI1NjYtNDUzOC04MzkyLWJmMDJjYTdhNzZjZFwvZGNrNWd2ci1kMWE4MjJmNC1jYjI3LTQ2YjMtYTBhZC01NTM4YjQ4NmI2ZjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9BrIks7SssFXJqO3zrbCWwfOPzVuui9_Q89iV9uwP2Y",
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
