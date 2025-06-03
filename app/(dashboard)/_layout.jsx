import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"

export default function DashboardLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
      initialRouteName="map"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.navBackground, paddingTop: 10, height: 74 },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen 
        name="list"
        options={{ title: "List", tabBarIcon: ({ focused }) => (
          <Ionicons 
            size={18} 
            name={focused ? 'list': 'list-outline'} 
            color={focused ? theme.iconColorFocused : theme.iconColor} 
          />
        )}} 
      />
      <Tabs.Screen 
        name="map"
        options={{ title: "Map", tabBarIcon: ({ focused }) => (
          <Ionicons 
            size={18} 
            name={focused ? 'map': 'map-outline'} 
            color={focused ? theme.iconColorFocused : theme.iconColor} 
          />
        )}} 
      />
      <Tabs.Screen 
        name="profile"
        options={{ title: "Profile", tabBarIcon: ({ focused }) => (
          <Ionicons 
            size={18} 
            name={focused ? 'person': 'person-outline'} 
            color={focused ? theme.iconColorFocused : theme.iconColor} 
          />
        )}}
      />
    </Tabs>
  )
}
