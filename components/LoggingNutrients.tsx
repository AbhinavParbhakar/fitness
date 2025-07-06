import { LoggingScreenNutrientsProps } from "@/types";
import { StyleSheet, View, Text} from "react-native";

export default function LoggingNutrientsComponent({calories, carbs, fat, protein}:LoggingScreenNutrientsProps ){
    const styles = StyleSheet.create({
        main_container:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            maxWidth:'60%'
        },
        sub_container:{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            maxHeight:'40%'
        },
    })

    return(
        <View style={styles.main_container}>
            <View style={styles.sub_container}>
                <Text>
                    Calories
                </Text>
                <Text>
                    {calories}
                </Text>
            </View>
            <View style={styles.sub_container}>
                <Text>
                    Carbs: {carbs}g
                </Text>
                <Text>
                    Fat: {fat}g
                </Text>
                <Text>
                    Protein: {protein}g
                </Text>
            </View>
        </View>
    )

}