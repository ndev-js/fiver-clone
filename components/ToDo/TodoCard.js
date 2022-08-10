/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TodoCard = () => {
  return (
    <View>
      <View style={[styles.borderContainer, styles.shadowProp]}>
        <View>
          <Text style={styles.black}>0 unread messages</Text>
        </View>
         <View style={styles.cardFlex}>
         <View style={styles.margin}>
            <Text style={styles.simpleText}>Your response time is good. Keep up {'\n'}
             great work
            </Text>

        </View>
        <View>
           <View style={styles.textb}><Text style={styles.simpleText}>0</Text></View>
        </View>
         </View>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({

  black: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'black',
  },
  borderContainer: {
    border: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: '100%',
    paddingHorizontal:6,
    paddingVertical:8
  },
  shadowProp: {
    // shadowOffset: {width: -2, height: 4},
    // shadowColor: '#171717',
    // shadowOpacity: 2,
    // shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  simpleText:{
    fontSize:10
  },
  margin:{
    marginVertical:5
  },
  cardFlex:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textb:{
    borderWidth:1,
    borderColor:'#C0C0C0',
    borderRadius:10,
    paddingHorizontal:10,

  },
  textbcolor:{
    color:'#C0C0C0'
  }
});
