import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import getStyles from "../estilos /global";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../https";
import { ObtenerID } from "../store/obtenerID";


const Ventana2 = () => {
  const styles = getStyles();
  const navigation = useNavigation();
  const { obtenerId } = ObtenerID();
  const uid = obtenerId;

  const handlePermissionRequest = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status === "granted") {
      const data = {
        permisosdemicrofono: true,
      };
      const docuRef = doc(db, `usuarios/${uid}`);
      await updateDoc(docuRef, data);
      navigation.navigate("ventana3");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <Text>Te acompañaré</Text>
        <Text>
          Estoy aquí para acompañarte en la gestión y monitoreo de tu salud y la
          de tu bebé, mi nombre es XXXXX y soy un sistema de inteligencia
          artificial, ¿me permites acompañarte?;
        </Text>
        <TouchableWithoutFeedback onPress={handlePermissionRequest}>
          <View style={styles.botondeaceptar}>
            <Text style={styles.textobotondeaceptar}>ACEPTO</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Ventana2;
