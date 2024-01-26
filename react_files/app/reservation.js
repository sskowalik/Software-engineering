import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Alert, ScrollView, TextInput,  ImageBackground, Image} from 'react-native';
import { styles_menu } from './style-menu';
import { styles_map } from './style-map';
import { useNavigation, useRoute } from '@react-navigation/native';

const Reservation = () => {
  const navigation = useNavigation();
  const route=useRoute();
  const {name, office_id}=route.params;

  const notificationPress = () => {
    navigation.navigate('notifications');
};

  return (
    <View style={styles_map.container}>
        <View style={styles_menu.containerTopBar}>
          <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_menu.herbPolski} />
          <Text style={styles_menu.urzedasPl}>URZĘDAS.PL</Text>
          <TouchableOpacity onPress={notificationPress}>
            <Image source={require('react_files/app/images/notificationBell.png')} style={styles_menu.notificationBell} />
          </TouchableOpacity>
          </View>
          <View style={styles_menu.lineTop}></View>

          <View style={styles_map.containerText}>
                <Text style={styles_map.visittext}>Wybierz godzinę, która ci odpowiada i umów się na wizytę! </Text>
                <Text style={styles_map.visittext1}>Wybrałeś urząd: {name} </Text>

         </View>

      
             <View style={styles_menu.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_menu.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_menu.mc} />
                <Text style={styles_menu.versionText}>wersja 1.0</Text>
            </View>
    </View>
  );
};

export default Reservation;