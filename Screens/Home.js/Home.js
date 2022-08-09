/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import React from 'react';
// eslint-disable-next-line semi
import avatar from '../../assets/avatar.png'
import UserStats from '../../components/UserData/UserStats';
const Home = () => {
  return (
  <ScrollView>
      <View style={styles.conatiner}>
          <View style={styles.flexContainer}>
              {/* <Text style={{color: 'white'}}>Hello World</Text> */}
              <View style={styles.imgcontainer}>
                  <Image source={avatar} style={{ width: 22, height: 22 }} />
                  <Text style={styles.headerFont}>Nomi Rajpoot</Text>
              </View>
          </View>
            <UserStats />
           
      </View>
  </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      backgroundColor: '#fff',
    },
    flexContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 7,
      borderBottomColor:'gray',
       borderBottomWidth:0.2,
    },
    imgcontainer: {
       flexDirection:'row',
    },
    img: {
      width: 30,
      height: 30,
      borderRadius: '50%',
    },
    headerFont:{
      color:'black',
      fontFamily: 'Nunito-Black',
      marginLeft:3,
    },
  });
