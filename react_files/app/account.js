import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_accounts } from './style-account';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from './ConfigAxios.ts';

const Account = () => {
    const route = useRoute();
    const { userData } = route.params;
    const [dataAcc, setdataAcc] = useState(null); // Stan przechowujący dane użytkownika
    useEffect(() => {
        setdataAcc(JSON.stringify(userData["data"]["user_id"]));
    }, [userData]);

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };

    return (
        <View style={styles_menu.container}>
            <View style={styles_menu.containerTopBar}>
                <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_menu.herbPolski} />
                <Text style={styles_menu.urzedasPl}>URZĘDAS.PL</Text>
                <TouchableOpacity onPress={notificationPress}>
                    <Image source={require('react_files/app/images/notificationBell.png')} style={styles_menu.notificationBell} />
                </TouchableOpacity>
            </View>
            <View style={styles_menu.lineTop}></View>
            <View style={styles_menu.containerBodyTiles}>
                {dataAcc && Object.keys(userData["data"]).map(key => (
                    <Text key={key} style={styles_accounts.text2}>
                        {key}: {JSON.stringify(userData["data"][key])}
                    </Text>
                ))}
            </View>
            <View style={styles_menu.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_menu.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_menu.mc} />
                <Text style={styles_menu.versionText}>wersja 1.0</Text>
            </View>
        </View>
    );
};

export default Account;
