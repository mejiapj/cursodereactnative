import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {
  // console.log(props);

  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <View>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </View>
  );
}
