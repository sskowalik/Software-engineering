import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_accounts } from './style-account';
import { useNavigation, useRoute } from '@react-navigation/native';

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
                    {dataAcc && (
                        <>
                            <Text style={styles_accounts.text2}>ID użytkownika: <Text style={styles_accounts.text3}>{userData['Data']['user_id']}</Text></Text>
                            <Text style={styles_accounts.text2}>E-mail: <Text style={styles_accounts.text3}>{userData['Data']['email']}</Text></Text>
                            <Text style={styles_accounts.text2}>Imię: <Text style={styles_accounts.text3}>{userData['Data']['first_name']}</Text></Text>
                            <Text style={styles_accounts.text2}>Drugie imię: <Text style={styles_accounts.text3}>{userData['Data']['second_name']}</Text></Text>
                            <Text style={styles_accounts.text2}>Nazwisko: <Text style={styles_accounts.text3}>{userData['Data']['surname']}</Text></Text>
                            <Text style={styles_accounts.text2}>Data urodzenia: <Text style={styles_accounts.text3}>{userData['Data']['date_of_birth']}</Text></Text>
                            <Text style={styles_accounts.text2}>PESEL: <Text style={styles_accounts.text3}>{userData['Data']['pesel']}</Text></Text>
                            <Text style={styles_accounts.text2}>Miejsce urodzenia: <Text style={styles_accounts.text3}>{userData['Data']['birthplace']}</Text></Text>
                            <Text style={styles_accounts.text2}>Adres zamieszkania: <Text style={styles_accounts.text3}>{userData['Data']['domicile']}</Text></Text>
                            <Text style={styles_accounts.text2}>Imię matki: <Text style={styles_accounts.text3}>{dataAcc.userData['Data']['mothers_name']}</Text></Text>
                            <Text style={styles_accounts.text2}>Imię ojca: <Text style={styles_accounts.text3}>{dataAcc.userData['Data']['fathers_name']}</Text></Text>
                        </>
                    )}
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
