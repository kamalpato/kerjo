import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native'
import axios from '../helpers/axios'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TextInput 
        placeholder='email'
        value={email}
        onChangeText={(text) => {setEmail(text)}}
      />
      <TextInput 
        placeholder='password'
        secureTextEntry={true}
        style={{marginBottom: 50, 
        marginTop: 10}}
        value={password}
        onChangeText={(text) => {setPassword(text)}}
      />
      <Button 
        title='login'
        onPress={() => {
          axios({
            method: 'POST',
            url: '/auth',
            data: {
              email: email,
              password: password
            }
          })
            .then(({data}) => {
              console.log(data)
              navigation.navigate('Home')
            })
            .catch(err => {console.log('ini error di login', err.message)})
        }} />
    </View>
  );
}

export default Login;
