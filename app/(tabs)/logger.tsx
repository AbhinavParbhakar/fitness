import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import {Camera, CameraView, useCameraPermissions} from 'expo-camera'
import { useState } from "react";
import LoggingScreenComponent from "@/components/LoggingScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function about(){

    const [permission,requestPermission] = useCameraPermissions()
    const styles = StyleSheet.create({
        container:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'#25292e',
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            margin:5,
            color:'#ffffff'
        },
        camera:{
            height:'80%',
            width:'80%',
            borderColor:'#e5ffff',
            borderWidth:5
        },
        button:{
            backgroundColor:'#00bbff',
            borderRadius:5
        }
    })



    return(
        <View style={styles.container}>
            {!permission?.granted ? 
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="camera" color='#e5ffff' size={40}/>
                <Pressable style={styles.button} onPress={requestPermission}> 
                    <Text style={styles.text}>
                        Provide Permission
                    </Text>
                </Pressable>
            </View>
            : 
            <LoggingScreenComponent />
            }
        </View>
    )
}
