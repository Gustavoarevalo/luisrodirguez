import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Navegacion from "./src/navegaciones/navegacion1";
import * as Application from "expo-application";
import { useEffect } from "react";
import { ObtenerID } from "./src/store/obtenerID";

export default function App() {
  const { setObtenerId } = ObtenerID();

  useEffect(() => {
    const getUniqueIdAsync = async () => {
      const uniqueId = await Application.androidId;
      setObtenerId(uniqueId);
    };

    getUniqueIdAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navegacion />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
/*
58b28732c78dfd6e
LOG  host.exp.exponent
LOG  host.exp.exponent
LOG  58b28732c78dfd6e */

// mi celular  ddc47c8e142eb160

//   classpath('com.android.tools.build:gradle:4.2.2')
// classpath('com.facebook.react:react-native-gradle-plugin:2.1.2')
