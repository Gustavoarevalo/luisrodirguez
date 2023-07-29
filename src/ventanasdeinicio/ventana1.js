import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import getStyles from "../estilos /global";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";
import { ObtenerID } from "../store/obtenerID";
import { db } from "../https";

const Ventana1 = () => {
  const styles = getStyles();
  const navigation = useNavigation();
  const [terminos, setTerminos] = useState(false);
  const { obtenerId } = ObtenerID();

  const uid = obtenerId;

  const siguienteVentana = async () => {
    const data = {
      aceptaterminosycondiciones: true,
    };

    const docuRef = doc(db, `usuarios/${uid}`);
    await setDoc(docuRef, data);
    navigation.navigate("ventana2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        {terminos !== true ? (
          <>
            <Text>Bienvenida</Text>
            <Text>
              Es maravilloso el viaje del embarazo, estamos aquí para brindarte
              el apoyo y recursos necesarios para cuidarte a ti y a tu bebé.
            </Text>
          </>
        ) : (
          <>
            <Text>Terminos y Condiciones</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </>
        )}

        <View style={styles.margin}>
          <TouchableWithoutFeedback onPress={() => setTerminos(true)}>
            <Text>Terminos y Condiciones</Text>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={siguienteVentana}>
          <View style={styles.botondeaceptar}>
            <Text style={styles.textobotondeaceptar}>ACEPTO</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Ventana1;
