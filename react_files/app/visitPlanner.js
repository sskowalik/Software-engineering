import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, TextInput,  ImageBackground, Image} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { styles_login } from './style-login';
import locationsData from './locations.json'; 
const infoPress = () => {
    navigation.navigate('info');
};

const YourMapComponent = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(locationsData);
  }, []);

  const handleMarkerPress = (index) => {
    console.log('You chose:', locations[index].name);
  };

  const screenHeight = Dimensions.get('window').height;
  const halfScreenHeight = screenHeight / 2;

  return (
    <View style={styles.container}>
        <View style={styles_login.containerTopBar}>
          <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski} />
          <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
          <TouchableOpacity onPress={infoPress}>
            <Image source={require('react_files/app/images/info.png')} style={styles_login.info} />
          </TouchableOpacity>
          </View>
          <View style={styles_login.lineTop}></View>

          <View style={styles.containerText}>
                <Text style={styles.visittext}>Zarezerwuj wizytę w wybranym przez ciebie urzędzie! </Text>
                <Text style={styles.visittext1}> Kliknij na lokalizację urzędu, do którego </Text>
                <Text style={styles.visittext1}> chcesz się zgłosić!</Text>

         </View>

      <MapView
        style={{ ...styles.map, height: halfScreenHeight }}
        initialRegion={{
          latitude: 50.05427094301187,
          longitude: 19.935413510809216,
          latitudeDelta: 0.083,
          longitudeDelta: 0.083,
        }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
            }}
          >
            <Callout>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{location.name}</Text>
                <Text>{location.address} {location.postal_code}</Text>
                <Text>tel. {location.phone_number}</Text>
                <Text>{location.email}</Text>
                <TouchableOpacity
                  style={styles.chooseButton}
                  onPress={() => handleMarkerPress(index)}
                >
                  <Text style={styles.chooseButtonText}>Wybierz urząd!</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
             <View style={styles_login.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_login.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_login.mc} />
                <Text style={styles_login.versionText}>wersja 1.0</Text>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText:{
    height:250,
    backgroundColor: '#FFFFFF',
  },
  visittext:{
    marginTop: '1%',
    marginLeft: '5%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 40,
    color: '#000000',
  },
  visittext1:{
    marginLeft: '5%',
    marginTop: '3%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 20,
    color: '#B3B3B3',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    width: 200,
  },
  calloutText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chooseButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chooseButtonText: {
    color: 'white',
  },
});

export default YourMapComponent;