import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { DataProps } from "../interfaces/PokemonDTO";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: { pokemonData: any };
    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
