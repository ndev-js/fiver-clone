/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const GigsStats = () => {
  return (
    <View>
      <View style={[styles.borderContainer, styles.shadowProp]}>
        <View style={styles.containerflex}>
          <View>
            <Text style={styles.simpleText}>Statistics</Text>
          </View>
          <View>
            <Text style={styles.simpleText}>Last 7 days</Text>
          </View>
        </View>
        <View style={styles.containerflex}>
          <View>
            <Text style={styles.simpleText}>Impressions</Text>
          </View>
          <View style={styles.iconpad}>
            <View>
              <Text style={styles.simpleText}>20</Text>
            </View>
            <View >
              <Text>
                <Icon name="arrow-up" size={10} color="green" />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GigsStats;

const styles = StyleSheet.create({
  containerflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
    paddingHorizontal: 6,
    paddingVertical: 8,
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
  simpleText: {
    fontSize: 10,
  },
  margin: {
    marginVertical: 5,
  },
  cardFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textb: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textbcolor: {
    color: '#C0C0C0',
  },
  iconpad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '7%',
  },
});
