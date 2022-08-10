/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GigsStats from './GigsStats';

const Mygigs = () => {
  return (<>
    <View style={styles.container}>
      <Text style={styles.heading}>My gigs</Text> 
    </View>
    <View style={styles.gigscard}><GigsStats/></View>
    </>)
}

export default Mygigs;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        paddingHorizontal: 8,
      },
      heading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
      },
      gigscard:{
        padding:5,
      },
});
