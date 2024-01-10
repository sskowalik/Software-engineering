import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_info } from './style-info';
import { styles_login } from './style-login';
import { useNavigation } from '@react-navigation/native';

const Documents = () => {

    const navigation = useNavigation();

    return (
        <View style={styles_info.container}>
            <View style={styles_info.containerTopBar}>
                <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_info.herbPolski} />
                <Text style={styles_info.urzedasPl}>URZĘDAS.PL</Text>
            </View>
            <View style={styles_info.lineTop}></View>
            <View style={styles_login.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_login.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_login.mc} />
                <Text style={styles_login.versionText}>wersja 0.1</Text>
            </View>
        </View>
    );
};
export default Documents;
