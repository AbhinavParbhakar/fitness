import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function layout(){
    return(
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                headerStyle: {
                backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title:'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                    headerTitleAlign:'center'
                }}
            />
            <Tabs.Screen 
                name="logger" 
                options={{
                    title:"Log", 
                    tabBarIcon : ({color,focused}) => (
                        <Ionicons name={focused ? 'camera-sharp' : 'camera-outline'} color={color} size={24} />
                    ),
                    headerShown:false
                }} 
            />
        </Tabs>
    )
}