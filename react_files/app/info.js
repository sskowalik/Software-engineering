import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_login } from './style-login';
import { useNavigation } from '@react-navigation/native';

const Info = () => {

    const navigation = useNavigation();

    return (
        <View style={styles_login.container}>
            <View style={styles_login.containerTopBar}>
                <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski} />
                <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
            </View>
            <View style={styles_login.lineTop}></View>
        </View>
    );
};
export default Info;