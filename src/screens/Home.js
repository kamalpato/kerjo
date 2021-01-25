import React, { useEffect } from 'react';
import {View, Text, FlatList, Image} from 'react-native'
import {getAttendance} from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const data  = useSelector(s => s.attendances)
  
  useEffect(() => {
    dispatch(getAttendance())
  }, [])

  useEffect(() => {
    console.log('ini data movies di reducer', data.length)
  }, [data])

  return (
    <View 
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Home Page</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Image source={{uri: item.poster}} style={{width: 100, height: 100}} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;