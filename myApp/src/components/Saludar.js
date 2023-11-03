import React from 'react';
import { Text } from 'react-native';

export default function Saludar(props) {
  /* const { firstname = 'Agustin', lastname = 'Navarro' } = props; */
  const { firstname, lastname } = props;
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.defaultProps = { firstname: 'Agustin', lastname: 'Navarro' };
