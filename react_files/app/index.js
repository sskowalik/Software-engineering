import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style-login';
const Login = () => {
    return (
        <View style={styles.container}>
                <View style={styles.maskGroup}>
                <View style={styles.rectangle13}></View>
                <View style={styles.orzelBialy3}></View>
                <View style={styles.rectangle14}></View>
                <View style={styles.rectangle15}></View>
                <View style={styles.line3}></View>
                <View style={styles.info2}></View>
                <View style={styles.coi2}></View>
                <View style={styles.znakUproszczony2}></View>
                <Text style={styles.wersja01}>wersja 0.1</Text>
                <Text style={styles.urzedasPl}>URZĘDAS.PL</Text>
                <View style={styles.herbPolski2}></View>
                <View style={styles.image1}></View>
                <View style={styles.rectangle22}></View>
                <View style={styles.rectangle23}></View>
                <View style={styles.rectangle25}></View>
                <View style={styles.rectangle24}></View>
                <Text style={styles.logowanie}>LOGOWANIE</Text>
                <Text style={styles.email}>E-mail</Text>
                <Text style={styles.haslo}>Hasło</Text>
                <Text style={styles.noAccount}>Nie posiadasz konta?</Text>
                <Text style={styles.forgotPassword}>Nie pamiętasz hasła?</Text>
                <Text style={styles.register}>Zarejestruj się</Text>
            </View>
        </View>
    );
};
export default Login;
