import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'; //quitar notch de ios
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar 
        backgroundColor="black" //color del notch
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;
