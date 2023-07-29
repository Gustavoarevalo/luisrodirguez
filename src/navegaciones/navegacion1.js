import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ventana1 from "../ventanasdeinicio/ventana1";
import Ventana2 from "../ventanasdeinicio/ventana2";
import Ventana3 from "../ventanasdeinicio/ventana3";

const screen = createNativeStackNavigator();

const Navegacion = () => {
  return (
    <NavigationContainer>
      <screen.Navigator>
        <screen.Screen
          name="ventana1"
          component={Ventana1}
          options={{
            headerShown: false,
          }}
        />

        <screen.Screen
          name="ventana2"
          component={Ventana2}
          options={{
            headerShown: false,
          }}
        />

        <screen.Screen
          name="ventana3"
          component={Ventana3}
          options={{
            headerShown: false,
          }}
        />
      </screen.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;
