import {  CameraView } from "expo-camera";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import LoggingNutrientsComponent from "./LoggingNutrients";
import { LoggingScreenNutrientsProps, OpenFoodFactsReturnType } from "@/types";

export default function LoggingScreenComponent(){

    const [barcode,setBarcode] = useState('')
    const [macros,setMacros] = useState<LoggingScreenNutrientsProps>({calories:0,carbs:0,protein:0,fat:0, name:''})

    const fetchMacros = async() =>{
        const url = `https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=nutriments,product_name`
        const response = await fetch(url,{method:'GET'})
        const response_body = await response.json() as OpenFoodFactsReturnType
        if (response_body.status == 0){
            Alert.alert('MacroCounter','Food Not Found')
            console.error('This was the barcode: ' + barcode)
            console.error('This was the link: ' + url)
        }else{
            setMacros({
                calories:response_body.product?.nutriments.energy_value as number,
                carbs: response_body.product?.nutriments.carbohydrates_value as number,
                protein: response_body.product?.nutriments.proteins_value as number,
                fat: response_body.product?.nutriments.fat_value as number,
                name: response_body.product?.product_name as string
            })
            console.log(macros)
        }
        return response_body        
    }

    CameraView.onModernBarcodeScanned((event)=>{
        if (event.type != undefined){
            setBarcode(barcode => event.data)
            if (barcode != ''){
                fetchMacros()
                CameraView.dismissScanner()
            }
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
            justifyContent:'center',
            borderWidth:5,
            borderColor: '#1ae8fc'
        },
        scan_button:{
            backgroundColor:'#1ca9c9',
            borderRadius:10,
            margin:2
        },
        log_button:{
            backgroundColor:'#76ee00',
            borderRadius:10,
            margin:2
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
                    name={macros.name}
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