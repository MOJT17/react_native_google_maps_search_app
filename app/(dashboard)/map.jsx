import { Button, Pressable, View, Dimensions, Icon, StyleSheet } from 'react-native'
import { useState } from "react";
import 'react-native-get-random-values';

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import MapView from 'react-native-maps'
import ThemedButton from '../../components/ThemedButton'
import { Ionicons } from "@expo/vector-icons"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { API_KEY } from "@env";

const map = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [Addrees, setAddress] = useState("");
  // console.log(API_KEY)
  return (
    
    <ThemedView style={styles.container}>

    {/* //   <ThemedText title={true} style={styles.heading}>
    //     Add a New Book
    //   </ThemedText>
    //   <Spacer /> */}
    
    <GooglePlacesAutocomplete
          fetchDetails={true}
          // placeholder="Search"
          onPress={(data, details = null) => {
            setAddress(details.description);
            console.log(data, details, details.description);
            console.log("Comming from Address UseState: ", Addrees)
          }}
          query={{
            key: API_KEY,
            language: "en",
          }}
          styles={{
            textInput: isFocused ? styles.textInputFocused : styles.textInput,
            container: styles.inputContainer,
          }}
          textInputProps={{
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          }}
          predefinedPlaces={[]}
          minLength={2}
          // keyboardShouldPersistTaps='handled'

          placeholder='Search for a Location'
	// textInputProps={{ placeholderTextColor: '#000' }}
	// styles={{ textInput: { fontSize: 16 } }}
	// onPress={(data, details = null) => { console.log(data, details); }}
	// query={{
	// 	key: API_KEY,
	// 	language: 'en',
	// }}
	
	enablePoweredByContainer={false}
	// predefinedPlaces={[]}
	autoFillOnNotFound={false}
	currentLocation={false}
	currentLocationLabel="Current location"
	debounce={0}
	disableScroll={false}
	enableHighAccuracyLocation={true}
	// fetchDetails={false}
	filterReverseGeocodingByTypes={[]}
	GooglePlacesDetailsQuery={{}}
	GooglePlacesSearchQuery={{
		rankby: 'distance',
		type: 'restaurant',
	}}
	GoogleReverseGeocodingQuery={{}}
	isRowScrollable={true}
	keyboardShouldPersistTaps="always"
	listHoverColor="#ececec"
	listUnderlayColor="#c8c7cc"
	listViewDisplayed="auto"
	keepResultsAfterBlur={false}
	// minLength={0}
	nearbyPlacesAPI="GooglePlacesSearch"
	numberOfLines={1}
	onFail={(e) => { console.warn( 'Google Place Failed : ', e )  }}
	onNotFound={() => { }}
	onTimeout={() => console.warn('google places autocomplete: request timeout')}
	predefinedPlacesAlwaysVisible={false}
	suppressDefaultStyles={false}
	textInputHide={false}
	timeout={20000}
	isNewPlacesAPI={false}
	fields="*"
        />
    
    <MapView
      initialRegion={{
        latitude: 48.88,
        longitude: 2.48,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      style= {styles.container}
      // showsUserLocation= {true}
   >
    

   </MapView>
   <ThemedButton style={{  position: 'absolute', bottom: "2%", left: "45%", zIndex: 1 }}>
    <Ionicons 
      size={20} 
      name={'add'} 
      color={"#FFF"} 
    />

    </ThemedButton>
  {/* // <Pressable 
  //   onPress={() => Alert.alert('Button pressed')}
  //   title='1'
  //   style={{ width: '50%', height: 50, zIndex: 1, paddingLeft: '5%' }}
    
  // /> */}
  

  </ThemedView>
    
  )
}

export default map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  inputContainer: {
    position: 'absolute',
    zIndex: 1 ,
    top: "7%",
    left: "5%",
    width: "90%",
  },
  textInputFocused: {
    borderWidth: 1,
    borderColor: "darkblue",
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
})