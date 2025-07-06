import { Link } from "expo-router";
import { Text, View, StyleSheet, FlatList } from "react-native";


import { db } from "@/firebaseConfig";
import { collection,query,where,getDocs, QuerySnapshot } from "firebase/firestore";
import { useEffect,useState } from "react";

type FoodClass = {
  Calories:number,
  Carbs:number,
  DayFK:string,
  Fat:number,
  Name:string,
  Protein:number
}

export default function Index() {

  const [foods, setFoods] = useState<FoodClass[]>([])
  const getData = async () => {
      const dayCollection = await collection(db,'Day')
      const foodCollection = await collection(db,'Food')
      const querySnapshot = await getDocs(foodCollection)
      querySnapshot.forEach((data)=>{
        const food = data.data() as FoodClass
        console.log('Added food item')
        setFoods(prevFoods => [food])
      })
    }
  useEffect(()=>{
    getData()
  },[])

  const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }})

  return (
    <View style={styles.container}>
      <FlatList 
      data={foods}
      renderItem={(renderFoodWrapper)=>
        <Text style={styles.text}>
          {renderFoodWrapper.item.Name}
        </Text>
      }
      contentContainerStyle={styles.container}/>
    </View>
  );
}



