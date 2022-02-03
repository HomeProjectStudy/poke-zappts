import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LineBox } from "../../components/LineBox";
import { Card } from "../../components/Card";
import { Container, Header, Title, Content, CardList } from "./styles";
import { api } from "../../services/api";
import { DataProps } from "../../interfaces/PokemonDTO";

export function Home() {
  const theme = useTheme();
  const [pokemon, setPokemon] = useState<DataProps[]>([]);

  useEffect(() => {
    async function fetchPokes() {
      try {
        const { data } = await api.get("/pokemon?limit=10&offset=0");
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokes();
  }, []);

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
      {/* <View style={{ marginTop: 50 }}>
        <Text>{pokemon}</Text>
      </View> */}
      <Content>
        <CardList
          data={pokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Card data={item} />}
        />
      </Content>
    </Container>
  );
}
