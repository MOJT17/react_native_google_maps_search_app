import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

function ThemedButton({ style, ...props }) {

  return (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]} 
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    marginVertical: 0
  },
  pressed: {
    opacity: 0.5
  },
})

export default ThemedButton