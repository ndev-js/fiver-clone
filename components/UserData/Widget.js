/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Widget = () => {
  return (
    <>
      <View style={styles.widgetContainer}>
        <View>
          <Text style={styles.border}>
            <View style={styles.space}>
              <Text style={styles.color}>100%</Text>
            </View>
          </Text>
          <View style={styles.margin}>
            <Text style={styles.childColor}>Response</Text>
            <Text style={styles.childColor}>rate</Text>
          </View>
        </View>
        <View>
          <Text style={styles.border}>
            <View style={styles.space}>
              <Text style={styles.color}>100%</Text>
            </View>
          </Text>
          <View style={styles.margin}>
            <Text style={styles.childColor}>Order</Text>
            <Text style={styles.childColor}>Completion</Text>
          </View>
        </View>
        <View>
          <Text style={styles.border}>
            <View style={styles.space}>
              <Text style={styles.color}>100%</Text>
            </View>
          </Text>
          <View style={styles.margin}>
            <Text style={styles.childColor}>On-time</Text>
            <Text style={styles.childColor}>delivery</Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.grayBorder}>
            <View style={styles.Grayspace}>
              <Text style={styles.color}>N/A</Text>
            </View>
          </Text>
          <View style={styles.margin}>
            <Text style={styles.childColor}>Positive</Text>
            <Text style={styles.childColor}>Rating</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
    </>
  );
};

export default Widget;

const styles = StyleSheet.create({
  widgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'white',
  },
  border: {
    borderColor: '#4bcc81',
    borderWidth: 2,
    borderRadius: 50,
    padding: 0,
  },
  childColor: {
    color: 'white',
    // fontWeight:'bold',
    textAlign: 'center',
  },
  space: {
    //    padding:12,
    //    paddingVertical:19,
    //    paddingHorizontal:12
    height: 80,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  color: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 4,
    fontSize: 24,
  },
  Grayspace: {
    height: 80,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
  },
  grayBorder: {
    borderColor: '#606060',
    borderWidth: 2,
    borderRadius: 50,
    padding: 0,
  },
  margin: {
    marginVertical: 10,
  },
  horizontalLine: {
    marginTop:20,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.2,
  },
});
