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
            borderTopWidth:2,
        },
        macros_container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderTopWidth:2,
            borderBottomWidth:2,
            borderColor: '#fafcfc'
        },
        calories_container:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        nutrients_container:{
            flex:1,
            height:'100%',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            borderLeftWidth:2,
            borderColor:'#fafcfc'
        },
        calories_header_text:{
            color:'#e5ffff',
            fontSize:35,
            fontFamily:'Roboto_600SemiBold',
            marginHorizontal:10
        },
        calories_text:{
            color:'#bae1ff',
            fontSize:30,
            fontFamily:'Roboto_400Regular'
        },
        nutrient_header_text:{
            color:'#c9d4d3',
            fontSize:30,
            fontFamily:'Roboto_500Medium',
            marginHorizontal:5
        },
        name_header:{
            minHeight:30,
            textAlignVertical:'center',
            textAlign:'center',
            color: '#e5ffff',
            fontSize:40,
            fontFamily:'Roboto_700Bold',
            marginHorizontal:5
        },
        individual_nutrient_container:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly'
        },
        carbs_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#ffab99'
        },
        fat_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#ffd966'
        },
        protein_text:{
            fontFamily:'Roboto_400Regular',
            fontSize:20,
            color:'#29d96c'
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