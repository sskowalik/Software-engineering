import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
    };

    const visitPlannerPress = () => {
        navigation.navigate('visitPlanner');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
    };

    const accountPress = () => {
        navigation.navigate('account');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
    };

    const visitsPress = () => {
        navigation.navigate('visits');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
    };

    const officesPress = () => {
        navigation.navigate('offices');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
    };

    const documentsPress = () => {
        navigation.navigate('documents');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
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

                </TouchableOpacity>
                <View style={styles_menu.containerBodyTiles2}>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={accountPress}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={visitsPress}>

                    </TouchableOpacity>
                </View>
                <View style={styles_menu.containerBodyTiles2}>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={officesPress}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles_menu.containerBody2} onPress={documentsPress}>

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
