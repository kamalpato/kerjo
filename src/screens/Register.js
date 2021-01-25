import React from 'react';
import {View, Text} from 'react-native'
const Register = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <TextInput placeholder='email' />
      <TextInput placeholder='password' secureTextEntry={true} />
    </View>
  );
}

export default Register;
