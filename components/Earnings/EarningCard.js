import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EarningCard = () => {
  return (
    <View style={styles.container}>
     <View style={[styles.border,styles.shadowProp]} >
        <View style={styles.item1}>
            <View>
                <Text>Personal Balance</Text>
                <Text style={styles.greenText}>$0</Text>
            </View>
            <View>
                <Text>Earnings in August</Text>
                <Text style={styles.black}>$0</Text>
            </View>
        </View>
     </View>
    </View>
  )
}

export default EarningCard

const styles = StyleSheet.create({
    container:{
        padding:5,
        paddingHorizontal:8
       
    },
    border:{
        border:1,
        borderColor:'black',
        borderRadius:8,
        backgroundColor:'white',
        // paddingVertical: 45,  
        // paddingHorizontal: 25,  
        width: '100%', 
    },
    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },  
      item1:{
        paddingHorizontal:5,
        paddingVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      greenText:{
        color:'#4bcc81',
        fontWeight:'bold',
        fontSize:17
      },
      black:{
        color:'black',
        fontWeight:'bold',
        fontSize:'17'
      }
})