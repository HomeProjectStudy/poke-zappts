import React from "react";
import {} from "react-native";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LineBox } from "../../components/LineBox";
import { Card } from "../../components/Card";
import { Container, Header, Title, Content } from "./styles";

export function Home() {
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
        <Card />
      </Content>
    </Container>
  );
}
