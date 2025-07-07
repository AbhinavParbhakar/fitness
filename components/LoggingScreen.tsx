import {  CameraView } from "expo-camera";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import LoggingNutrientsComponent from "./LoggingNutrients";
import { LoggingScreenNutrientsProps, OpenFoodFactsReturnType } from "@/types";

export default function LoggingScreenComponent(){

    const [barcode,setBarcode] = useState('')
    const [macros,setMacros] = useState<LoggingScreenNutrientsProps>({calories:0,carbs:0,protein:0,fat:0, name:''})
    let barcodeSet = false


    const resetLogging = () =>{
        setBarcode('')
        setMacros({calories:0,carbs:0,protein:0,fat:0, name:''})
    }

    const fetchMacros = async(tempBarcode:string) =>{
        const url = `https://world.openfoodfacts.net/api/v2/product/${tempBarcode}?fields=nutriments,product_name`
        const response = await fetch(url,{method:'GET'})
        const response_body = await response.json() as OpenFoodFactsReturnType
        if (response_body.status == 0){
            Alert.alert('MacroCounter','Food Not Found')
            console.error('This was the barcode: ' + tempBarcode)
            console.error('This was the link: ' + url)
        }else{
            const calories = response_body.product?.nutriments.energy_value as number
            const carbs = response_body.product?.nutriments.carbohydrates_value as number
            const protein = response_body.product?.nutriments.proteins_value as number
            const fat = response_body.product?.nutriments.fat_value as number
            const name = response_body.product?.product_name as string
            setMacros({
                calories: typeof calories != typeof undefined ? calories : 0,
                carbs:  typeof carbs != typeof undefined ? carbs : 0,
                protein: typeof protein != typeof undefined ? protein : 0,
                fat:  typeof fat != typeof undefined ? fat : 0,
                name: typeof name != typeof undefined ? name : "",
            })
        }
        return response_body        
    }

    CameraView.onModernBarcodeScanned((event)=>{
        const tempBarcode = event.data
        if (event.type != undefined){
            setBarcode(event.data)
            if (!barcode){
                barcodeSet = true
                fetchMacros(tempBarcode)
                CameraView.dismissScanner()
                barcodeSet = false
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