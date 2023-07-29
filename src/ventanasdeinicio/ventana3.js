import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import getStyles from "../estilos /global";
import { useNavigation } from "@react-navigation/native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../https";
import { ObtenerID } from "../store/obtenerID";

import { requestPermission } from "react-native-health-connect";

const Ventana3 = () => {
  const styles = getStyles();
  const navigation = useNavigation();
  const { obtenerId } = ObtenerID();
  const uid = obtenerId;

  const handlePermissionRequest = async () => {
    requestPermission([
      {
        accessType: "read",
        recordType: "ActiveCaloriesBurned",
      },
      {
        accessType: "write",
        recordType: "ActiveCaloriesBurned",
      },
    ]).then((permissions) => {
      console.log("Granted permissions ", { permissions });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <Text>Gemelo digital sanitario</Text>
        <Text>
          Vamos a crear un gemelo digital basado en los datos de tu dispositivo
          movil ¿Estas de acuerdo?
        </Text>
        <TouchableWithoutFeedback onPress={handlePermissionRequest}>
          <View style={styles.botonestoydeacuerdo}>
            <Text style={styles.textobotondeaceptar}>ESTOY DE ACUERDO</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
export default Ventana3;
