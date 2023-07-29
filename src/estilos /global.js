import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./colores";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    margin: {
      marginTop: 40,
    },
    botondeaceptar: {
      marginLeft: 5,
      backgroundColor: Colors.azul,
      padding: 10,
      height: 40,
      width: 80,
      borderRadius: 5,
    },
    textobotondeaceptar: {
      color: Colors.light,
    },
    botonestoydeacuerdo: {
      marginLeft: 5,
      backgroundColor: Colors.azul,
      padding: 10,
      height: 40,
      width: 160,
      borderRadius: 5,
    },
  });

export default getStyles;
