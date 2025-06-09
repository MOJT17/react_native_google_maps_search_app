import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const ListScreen = () => {

  return (
    <ThemedView style={styles.container} safe={true}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your List
      </ThemedText>
      <Spacer />

    </ThemedView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})