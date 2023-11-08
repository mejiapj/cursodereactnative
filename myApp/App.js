import 'react-native-gesture-handler';
import React from 'react';

// import { StatusBar } from 'expo-status-bar';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      {/*       <View style={styles.container}>
        <Text>Curso React Native</Text>
        <Saludar firstname="Agustin" lastname="Navarro" />
        <Saludar firstname="Agustin" lastname="Navarro Galdon" />
        <Saludar name="Carlos Navarro" />
        <Saludar name="Andres Navarro" />
      </View> */}
      <NavigationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
