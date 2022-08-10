/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EarningCard from './EarningCard';
const Earnings = () => {
  return (<>
    <View style={styles.container}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.heading}>Earnings</Text>
        </View>
        <View>
          <Text style={styles.subhead}>View Details</Text>
        </View>
      </View> 
    </View>
    <View>
    <EarningCard/>
    </View>
    </>);
};

export default Earnings;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
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
  subhead: {
    fontSize: 16,
    color: '#4bcc81',
    fontWeight: 'bold',
  },
});
