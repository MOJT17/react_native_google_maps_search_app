import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const Profile = () => {
  return (
    <ThemedView safe={true} style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Profile
      </ThemedText>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})