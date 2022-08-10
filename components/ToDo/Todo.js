/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoCard from './TodoCard';

const Todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Dos</Text>
      <View style={styles.todocard}><TodoCard/></View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({

    container: {
        paddingVertical: 8,
        paddingHorizontal: 5,
      },
      flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      heading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
      },
      todocard:{
        marginVertical:6,
      },

});
