import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/telas/Home";

const App  = (): JSX.Element => {
  return<>
    <SafeAreaView style={estilos.tela}>
      <Home/>
    </SafeAreaView>
  </> 
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})

export default App;