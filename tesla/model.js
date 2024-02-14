import React, { useState,useEffect } from 'react'
import { Text, View,StyleSheet,Image,Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const CarModel=()=>{
    
    return(
<View>
<View style={styles.mymodel}>
    <Text style={{color:"white",fontSize:25,}}>My Model Concept</Text>
    <Text style={{color:"white",opacity:0.7,fontSize:15,top:5,}}>317mi</Text>
    <View style={styles.battery}><Entypo name="battery" size={24} color="white" /></View>
    <Text style={{color:"white",opacity:0.7,bottom:15,fontSize:20}}>Parked</Text>
</View>
<View style={styles.account}><MaterialIcons name="account-circle" size={40} color="white" /></View>
<View><Image source={require("./assets/teslacar.png")} style={styles.carphoto} /></View>
<View style={styles.fan}>
<Entypo name="lock" size={30} color="white" />
<FontAwesome6 name="fan" size={30} color="white" style={{left:100,bottom:20,}} />
<FontAwesome6 name="bolt-lightning" size={30} color="white" style={{left:220,bottom:50,}}/>
<FontAwesome name="car" size={30} color="white"  style={{bottom:80,left:350,}}/>
</View>
<View style={styles.controls}>
<FontAwesome name="car" size={30} color="white" style={{left:10,top:10,}}/>
<Text style={{color:"white",left:60,bottom:20,fontSize:25,}}>Controls</Text>
<Pressable onPress={()=>{console.log("navigation")}}><EvilIcons name="chevron-right" size={50} color="white" style={{bottom:50,left:350,}} /></Pressable>
<View style={styles.climate}>
<FontAwesome5 name="fan" size={30} color="white" style={{left:10,top:5,}}/>
<Text style={{color:"white",fontSize:25,left:50,bottom:25,}}>Climate</Text>
<Pressable onPress={()=>{console.log("navigation")}}><EvilIcons name="chevron-right" size={50} color="white" style={{bottom:60,left:350,}} /></Pressable>
</View>
<View style={styles.location}>
<Entypo name="location-pin" size={40} color="white" style={{left:5,}} /><Text style={{fontSize:25,bottom:35,left:50,color:"white",}}>Location</Text>
<Pressable onPress={()=>{console.log("navigation")}}><EvilIcons name="chevron-right" size={50} color="white" style={{bottom:70,left:350,}} /></Pressable>
</View>
<View style={styles.steering}>
<MaterialCommunityIcons name="steering" size={40} style={{left:5,}} color="white" /><Text style={{fontSize:25,bottom:38,color:"white",left:50,}}>Summon</Text><Pressable onPress={()=>{console.log("navigation")}}><EvilIcons name="chevron-right" size={50} color="white" style={{bottom:70,left:350,}} /></Pressable>
</View>
</View>














</View>
    )
};
const styles = StyleSheet.create({
    mymodel:{
        backgroundColor:"#161818",widht:400,height:100,top:40,

    },
    battery:{
             bottom:15,left:50,
    },
    account:{
          bottom:50,left:360,
    },
    carphoto:{
          left:55,top:100,
    },
    fan:{
  backgroundColor:"#161818",width:400,height:40,top:150,
    },
    controls:{
   backgroundColor:"#161818",widht:400,height:80,top:200,bottom:15,
    },
    climate:{
     backgroundColor:"#161818",height:50,width:500,bottom:30,top:10,
    },
    location:{
        backgroundColor:"#161818",height:50,width:500,bottom:20,top:50,
    },
    steering:{
        backgroundColor:"#161818",height:50,width:500,bottom:20,top:100,
    },
})


export default CarModel;