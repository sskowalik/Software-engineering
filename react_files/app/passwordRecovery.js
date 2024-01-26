import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import { styles_login } from './style-login';
import { styles_passRec } from './style-passRec';
import { useNavigation } from '@react-navigation/native';
import { generateRandomPassword } from './generatePassword';
import axios from 'axios';

const PasswordRecovery = () => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');

    const navigation = useNavigation();

    const mailApiKey = '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';

    const recoverPress = async () => {
        const newPassword = generateRandomPassword();

        try {
            const response = await axios.post(
                'https://api.sendinblue.com/v3/smtp/email',
                {
                    sender: { name: 'Urzędas.pl', email: 'haslo@urzedas.pl' },
                    to: [{ email: email1 }],
                    subject: 'Odzyskiwanie hasła w aplikacji Urzędas.pl',
                    textContent: `Oto Twoje tymczasowe hasło w aplikacji Urzędas.pl: ${newPassword}.\nMożesz je zmienić przy następnym logowaniu się do aplikacji.`,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': mailApiKey,
                    },
                }
            );

            console.log('E-mail został wysłany:', response.data);
            navigation.navigate('index');
            Alert.alert('Tymczasowe hasło zostało wysłane!', 'Sprawdź swojego maila i koniecznie zmień hasło przy następnym logowaniu.');
        } catch (error) {
            console.error('Błąd podczas wysyłania e-maila:', error);

            if (error.response) {
                // Błąd z odpowiedzią serwera
                console.error('Status błędu:', error.response.status);
                console.error('Dane błędu:', error.response.data);
            } else if (error.request) {
                // Błąd bez odpowiedzi
                console.error('Brak odpowiedzi:', error.request);
            } else {
                // Inne błędy
                console.error('Błąd:', error.message);
            }

            Alert.alert('Błąd', 'Wystąpił błąd podczas wysyłania e-maila.');
        }
    };

    const infoPress = () => {
        navigation.navigate('info');
        Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
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
                <Text style={styles_passRec.recHeader}>Odzyskaj hasło.</Text>
                <Text style={styles_passRec.recText}>Na podany przez ciebie e-mail wysłane zostanie tymczasowe hasło, które posłuży ci do kolejnego logowania.                                  Hasło możesz następnie zmienić                  w panelu administracyjnym.</Text>
                <Text style={styles_passRec.recMail1Text}>E-mail</Text>
                <TextInput style={styles_passRec.recMail1} placeholder="Wprowadź e-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail1(text)} value={email1}></TextInput>
                <Text style={styles_passRec.recMail2Text}>Potwierdź E-mail</Text>
                <TextInput style={styles_passRec.recMail2} placeholder="Potwierdź adres e-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail2(text)} value={email2}></TextInput>
                <TouchableOpacity style={[styles_passRec.SubmitButton, (email1 !== '' && email2 !== '') ? styles_passRec.SubmitButtonPressed : null,]} onPress={recoverPress}>
                    <Text style={[styles_passRec.SubmitText, (email1 !== '' && email2 !== '') ? styles_passRec.SubmitTextPressed : null,]}>ODZYSKAJ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles_login.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_login.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_login.mc} />
                <Text style={styles_login.versionText}>wersja 0.1</Text>
            </View>
        </View>
        </ScrollView>

    );
};
export default PasswordRecovery;
