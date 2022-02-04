import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LineBox } from "../../components/LineBox";
import { Card } from "../../components/Card";
import { Container, Header, Title, Content, CardList } from "./styles";
import { api } from "../../services/api";
import { DataProps } from "../../interfaces/PokemonDTO";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const theme = useTheme();
  const { navigate } = useNavigation();
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

  function handlerNavigateDetails() {
    navigate("Details");
  }

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
        <CardList
          data={pokemon}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Card data={item} onPress={handlerNavigateDetails} />
          )}
        />
      </Content>
    </Container>
  );
}
