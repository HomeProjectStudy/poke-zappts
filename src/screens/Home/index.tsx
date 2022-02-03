import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LineBox } from "../../components/LineBox";
import { Card } from "../../components/Card";
import { Container, Header, Title, Content, CardList } from "./styles";
import { api } from "../../services/api";
import { PokemonDTO } from "../../interfaces/PokemonDTO";

export function Home() {
  const theme = useTheme();
  const [data, setData] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    async function fetchPokes() {
      try {
        const { data } = await api.get("/pokemon");
        console.log("O que venho", data);
        setData(data);
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
      <Content>
        <CardList
          data={data}
          keyExtractor={(item) => item.data.name}
          renderItem={({ item }) => <Card data={item.data} />}
        />
      </Content>
    </Container>
  );
}
