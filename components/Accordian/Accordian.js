/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
const Accordian = () => {
  const [show, sethide] = useState(false);
  const handleToggle = () => {
    sethide(!show);
  };
  return (
    <View>
      <View style={styles.accordflex}>
        <View>
          <Text style={styles.accordColor}>Reach Your Next Level</Text>
        </View>
        <View>
          <Text style={styles.accordColor}>
            <Icon
              name="down"
              size={15}
              color="#A0A0A0"
              onPress={handleToggle}
            />
          </Text>
        </View>
      </View>
      {show && (
        <>
          <View style={styles.userProgress}>
            <View>
              <View style={styles.progFlex}>
                <Text style={styles.mainHeading}>Selling Seniority</Text>
                <Text style={styles.greenColor}>60/60</Text>
              </View>
              <View style={styles.subCont}>
                <Text style={styles.subhead}>
                  Complete at least 60 days as a New Seller
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.userProgress}>
            <View>
              <View style={styles.progFlex}>
                <Text style={styles.mainHeading}>Orders</Text>
                <Text style={styles.subheadIncomplete}>4/10</Text>
              </View>
              <View style={styles.subCont}>
                <Text style={styles.subhead}>
                  Recieve and complete at least 10 orders(all time)
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.userProgress}>
            <View>
              <View style={styles.progFlex}>
                <Text style={styles.mainHeading}>Earnings</Text>
                <Text style={styles.greenColor}>$48/400</Text>
              </View>
              <View style={styles.subCont}>
                <Text style={styles.subhead}>
                  Earn at least $400 from completed orders(all time)
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.userProgress}>
            <View>
              <View style={styles.progFlex}>
                <Text style={styles.mainHeading}>Days Without Warnings</Text>
                <Text style={styles.greenColor}>30/30</Text>
              </View>
              <View style={styles.subCont}>
                <Text style={styles.subhead}>
                  Avoid recieving warnings for Terms of Service violations over
                  the course of 30 days
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  accordflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userProgress: {
    marginTop: 15,
  },
  progFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainHeading: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  subCont: {
    paddingVertical: 10,
  },
  subhead: {
    color: '#fff',
    fontSize: 10,
  },
  subheadIncomplete: {
    color: '#A0A0A0',
    fontSize: 10,
  },
  greenColor: {
    color: '#4bcc81',
    fontSize: 12,
  },

  horizontalLine: {
    marginTop: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.2,
  },
});
