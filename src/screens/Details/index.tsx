import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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
import { api } from "../../services/api";
import { DataProps } from "../../interfaces/PokemonDTO";

export function Details() {
  const route = useRoute();
  const { pokemonData } = route.params;
  const pokemonIndex = pokemonData.url.split("/")[6];
  const [types, setTypes] = useState("");
  const [weight, setWeight] = useState("");
  const [heigth, setHeigth] = useState("");
  const { goBack } = useNavigation();
  const theme = useTheme();

  function handlerGoBack() {
    goBack();
  }

  useEffect(() => {
    async function loadTypes() {
      const { data } = await api.get(`/type/${pokemonIndex}`);
      setTypes(data);
    }
    loadTypes();
  }, []);
  useEffect(() => {
    async function loadWeight() {
      const { data } = await api.get(`/pokemon/${pokemonIndex}`);
      console.log("####################");
      console.log("setheight", data.height);
      // console.log("setWeight", data.weight);
      setWeight(data.weight);
      setHeigth(data.height);
    }
    loadWeight();
  }, []);
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handlerGoBack}>
          <Feather name="arrow-left" size={24} color={theme.colors.black} />
        </TouchableOpacity>
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
              uri: `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`,
            }}
            resizeMode="contain"
          />
        </ContentBoxPokemon>
        <PokeName>Name: {pokemonData.name}</PokeName>
        <PokeName>Tipo: {types.name}</PokeName>
        <PokeName>Peso: {weight} kg</PokeName>
        <PokeName>Altura: {heigth}m</PokeName>
      </Content>
    </Container>
  );
}
