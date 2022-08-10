import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EarningCard = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.border, styles.shadowProp]}>
        <View style={styles.item1}>
          <View>
            <View>
              <Text style={styles.simpleText}>Personal Balance</Text>
            </View>
            <View>
              <Text style={styles.greenText}>$0</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.simpleText}>Earnings in August</Text>
            </View>
            <View>
              <Text style={styles.black}>$0</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.item1}>
          <View>
            <View>
              <Text style={styles.simpleText}>Avg.selling price</Text>
            </View>
            <View>
              <Text style={styles.black}>$54.70</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.simpleText}>Earnings in August</Text>
            </View>
            <View>
              <Text style={styles.black}>$0</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.item1}>
          <View>
            <View>
              <Text style={styles.simpleText}>Personal Balance</Text>
            </View>
            <View>
              <Text style={styles.black}>$0</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.simpleText}>Earnings in August</Text>
            </View>
            <View>
              <Text style={styles.black}>$0</Text>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default EarningCard;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // paddingHorizontal: 5,
   
    
  },
  border: {
    border: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: '100%',
    padding:3
  },
  shadowProp: {
    // shadowOffset: {width: -2, height: 4},
    // shadowColor: '#171717',
    // shadowOpacity: 2,
    // shadowRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  
  },
  item1: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greenText: {
    color: '#4bcc81',
    fontWeight: 'bold',
    fontSize: 15,
  },
  black: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  simpleText:{
    fontSize:10
  }
});
