import { LoggingScreenNutrientsProps } from "@/types";
import { StyleSheet, View, Text} from "react-native";
import {Roboto_400Regular, Roboto_600SemiBold, Roboto_500Medium, Roboto_700Bold,useFonts} from '@expo-google-fonts/roboto/'

export default function LoggingNutrientsComponent({calories, carbs, fat, protein, name}:LoggingScreenNutrientsProps ){

    const [found,error] = useFonts({
        Roboto_400Regular,
        Roboto_600SemiBold,
        Roboto_500Medium,
        Roboto_700Bold
    })

    // console.log('Fonts found' + found)
    const styles = StyleSheet.create({
        main_container:{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            width:'100%',
            borderColor: '#fafcfc',
        },
        macros_container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        },
        calories_container:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:5
        },
        nutrients_container:{
            flex:1,
            height:'100%',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',

        },
        calories_header_text:{
            color:'#e5ffff',
            fontSize:35,
            fontFamily:'Roboto_600SemiBold',
            padding:5
        },
        calories_text:{
            color:'#bae1ff',
            fontSize:30,
            fontFamily:'Roboto_400Regular'
        },
        nutrient_header_text:{
            color:'#e5ffff',
            fontSize:30,
            fontFamily:'Roboto_500Medium',
            padding:5,
        },
        name_header:{
            minHeight:30,
            color: '#e5ffff',
            fontSize:25,
            fontFamily:'Roboto_700Bold',
            textAlignVertical:'center',
            margin:5,
        },
        individual_nutrient_container:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly',
            backgroundColor:'#45484d',
            minWidth: 120,
            borderWidth:3,
            borderRadius:12,
            borderColor: '#e5ffff',
            marginVertical:3
        },
        carbs_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#bab804',
            backgroundColor: '#fafafa',
            minWidth:100,
            padding:5,
            textAlign:'center',
            borderRadius:12
        },
        fat_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#d40007',
            backgroundColor: '#fafafa',
            minWidth:100,
            padding:5,
            textAlign:'center',
            borderRadius:12
        },
        protein_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#04ba07',
            backgroundColor: '#fafafa',
            minWidth:100,
            padding:5,
            textAlign:'center',
            borderRadius:12
        },

    })

    return(
        <View style={styles.main_container}>
            <Text style={styles.name_header}>
                {name.length < 3 ?
                'Product Name'
                : name
                }
            </Text>
            <View style={styles.macros_container}>
                <View style={styles.calories_container}>
                    <Text style={styles.calories_header_text}>
                        Calories
                    </Text>
                    <Text style={styles.calories_text}>
                        {calories}
                    </Text>
                </View>
                <View style={styles.nutrients_container}>
                    <View style={styles.individual_nutrient_container}>
                        <Text style={styles.nutrient_header_text}>
                            Carbs
                        </Text>
                        <Text style={styles.carbs_text}>
                            {carbs}g
                        </Text>
                    </View>
                    <View style={styles.individual_nutrient_container}>
                        <Text style={styles.nutrient_header_text}>
                            Fat
                        </Text>
                        <Text style={styles.fat_text}>
                            {fat}g
                        </Text>
                    </View>
                    <View style={styles.individual_nutrient_container}>
                        <Text style={styles.nutrient_header_text}>
                            Protein
                        </Text>
                        <Text style={styles.protein_text}>
                            {protein}g
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )

}