import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };

    const visitPlannerPress = () => {
        navigation.navigate('visitPlanner');
    };

    const accountPress = () => {
        navigation.navigate('account');
    };

    const visitsPress = () => {
        navigation.navigate('visits');
    };

    const officesPress = () => {
        navigation.navigate('offices');
    };

    const documentsPress = () => {
        navigation.navigate('documents');
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
                <TouchableOpacity style={styles_menu.containerBody} onPress={visitPlannerPress}>
                    <Image source={require('react_files/app/images/iconVisitPlanner.png')} style={styles_menu.iconPlanner} />
                    <View>
                        <Text style={styles_menu.textPlanner}>UMÓW</Text>
                        <Text style={styles_menu.textPlanner}>WIZYTĘ</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles_menu.containerBodyTiles2}>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={accountPress}>
                        <Image source={require('react_files/app/images/iconAccount.png')} style={styles_menu.icon} />
                        <Text style={styles_menu.text}>PROFIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={visitsPress}>
                        <Image source={require('react_files/app/images/iconVisits.png')} style={styles_menu.icon} />
                        <Text style={styles_menu.text}>TWOJE WIZYTY</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles_menu.containerBodyTiles2}>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={officesPress}>
                        <Image source={require('react_files/app/images/iconOffices.png')} style={styles_menu.icon} />
                        <Text style={styles_menu.text}>URZĘDY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={documentsPress}>
                        <Image source={require('react_files/app/images/iconDocuments.png')} style={styles_menu.icon} />
                        <Text style={styles_menu.text}>DOKUMENTY</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles_menu.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_menu.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_menu.mc} />
                <Text style={styles_menu.versionText}>wersja 0.1</Text>
            </View>
        </View>
    );
};
export default Menu;
