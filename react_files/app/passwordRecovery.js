import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import { styles_login } from './style-login';
import { styles_passRec } from './style-passRec';
import { useNavigation } from '@react-navigation/native';

const PasswordRecovery = () => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');

    const navigation = useNavigation();
    const recoverPress = () => {
        navigation.navigate('index');
        Alert.alert('Tymczasowe hasło zostało wysłane!', 'Sprawdź swojego maila i koniecznie zmień hasło przy następnym logowaniu!');
    };

    const infoPress = () => {
        navigation.navigate('info');
    };
    
    return (
        <ScrollView>
        <View style={styles_passRec.container}>
            <View style={styles_login.containerTopBar}>
                <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski} />
                <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
                <TouchableOpacity onPress={infoPress}>
                    <Image source={require('react_files/app/images/info.png')} style={styles_login.info} />
                </TouchableOpacity>
            </View>
            <View style={styles_login.lineTop}></View>
            <View style={styles_passRec.containerPassRecWindow}>
                <Text style={styles_passRec.recHeader}>Odzyskaj hasło</Text>
                <Text style={styles_passRec.recText}>Na podany przez ciebie e-mail wysłane zostanie tymczasowe hasło, które posłuży ci do kolejnego logowania.                                  Hasło możesz następnie zmienić                  w panelu administracyjnym.</Text>
                <Text style={styles_passRec.recMailText}>E-mail</Text>
                <TextInput style={styles_passRec.recMail} placeholder="Wprowadź e-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail1(text)} value={email1}></TextInput>
                <Text style={styles_passRec.recMailText}>Potwierdź E-mail</Text>
                <TextInput style={styles_passRec.recMail} placeholder="Potwierdź adres e-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail2(text)} value={email2}></TextInput>
                <TouchableOpacity style={[styles_passRec.SubmitButton, (email1 !== '' && email1==email2) ? styles_passRec.SubmitButtonPressed : null,]} onPress={recoverPress}>
                    <Text style={[styles_passRec.SubmitText, (email1 !== '' && email1==email2) ? styles_passRec.SubmitTextPressed : null,]}>ODZYSKAJ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles_login.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_login.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_login.mc} />
                <Text style={styles_menu.versionText}>wersja 1.0</Text>
            </View>
        </View>
        </ScrollView>

    );
};
export default PasswordRecovery;
