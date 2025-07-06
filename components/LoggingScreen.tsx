import {  CameraView } from "expo-camera";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import LoggingNutrientsComponent from "./LoggingNutrients";
import { LoggingScreenNutrientsProps, OpenFoodFactsReturnType } from "@/types";

export default function LoggingScreenComponent(){

    const [barcode,setBarcode] = useState('')
    const [macros,setMacros] = useState<LoggingScreenNutrientsProps>({calories:0,carbs:0,protein:0,fat:0})
    const [macrosFound, setMacrosFound] = useState(false)

    const fetchMacros = async() =>{
        const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=nutriments`)
        const response_body = await response.json() as OpenFoodFactsReturnType
        console.log(barcode)
        console.log(response_body.status)
        if (response_body.status == 0){
            setMacrosFound(false)
            Alert.alert('MacroCounter','Food Not Found')
        }else{
            setMacrosFound(true)
            setMacros({
                calories:response_body.product.nutriments?.energy_value as number,
                carbs: response_body.product.nutriments?.carbohydrates_value as number,
                protein: response_body.product.nutriments?.proteins_value as number,
                fat: response_body.product.nutriments?.fat_value as number
            })
        }
        
    }

    CameraView.onModernBarcodeScanned((event)=>{
        CameraView.dismissScanner()
        setBarcode(event.data)
        if (!macrosFound){
            console.log(barcode)
            fetchMacros()
        }
    })

    const styles = StyleSheet.create({
        main_container:{
            flex:1,
            flexDirection:'column'
        },
        buttons_container:{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        scan_button:{
            backgroundColor:'#1ca9c9',
            borderRadius:10
        },
        log_button:{
            backgroundColor:'#76ee00',
            borderRadius:10
        },
        button_text:{
            fontSize:25,
            color:'#e5ffff',
            margin:5
        }
    })

    return(
            <View style={styles.main_container}>
                <LoggingNutrientsComponent 
                    protein={macros.protein}
                    calories={macros.calories}
                    carbs={macros.carbs}
                    fat={macros.fat}
                    />
                <View style={styles.buttons_container}>
                    <Pressable style={styles.scan_button} onTouchStart={(event)=>{CameraView.launchScanner({barcodeTypes:['upc_a']})}}> 
                        <Text style={styles.button_text}>
                        Scan
                        </Text>
                    </Pressable>
                <Pressable style={styles.log_button}> 
                    <Text style={styles.button_text}>
                        Log
                    </Text>
                </Pressable>
                </View>
            </View>
    )
}