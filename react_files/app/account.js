import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_accounts } from './style-account';
import { useNavigation } from '@react-navigation/native';

const Account = () => {

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
                <Text style={styles_accounts.text2}>Użytkownik</Text>
                <Text style={styles_accounts.text3}>Miłosz Grzegorz Gronowski</Text>
                <Text style={styles_accounts.text2}>E-mail</Text>
                <Text style={styles_accounts.text3}>email@gmail.com</Text>
                <Text style={styles_accounts.text2}>Pesel</Text>
                <Text style={styles_accounts.text3}>02220099876</Text>
                <Text style={styles_accounts.text2}>Data urodzenia</Text>
                <Text style={styles_accounts.text3}>10.10.2002</Text>
                <Text style={styles_accounts.text2}>Miejsce Urodzenia</Text>
                <Text style={styles_accounts.text3}>Kalwaria Zebrzydowska</Text>
                <Text style={styles_accounts.text2}>Adres zamieszkania</Text>
                <Text style={styles_accounts.text3}>ul. Kwiatowa 5, 00-001 Warszawa</Text>
                <Text style={styles_accounts.text2}>Imiona rodziców</Text>
                <Text style={styles_accounts.text3}>Dawid Koza, Maria Koza</Text>
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
