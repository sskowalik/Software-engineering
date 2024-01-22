import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { styles_login } from './style-login';
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orientation, setOrientation] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        lockOrientation();
    }, []);
    
    const lockOrientation = async () => {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
        const o = await ScreenOrientation.getOrientationAsync();
        setOrientation(o);
    };
    const loginPress = () => {
        navigation.navigate('menu');
    };

    const recoveryPress = () => {
        navigation.navigate('passwordRecovery');
    };
    
    const registerPress = () => {
        navigation.navigate('registration');
    };

    const infoPress = () => {
        navigation.navigate('info');
    };

    return (
        <ScrollView>
        <View style={styles_login.container}>
            <View style={styles_login.containerTopBar}>
                <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski} />
                <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
                <TouchableOpacity onPress={infoPress}>
                    <Image source={require('react_files/app/images/info.png')} style={styles_login.info} />
                </TouchableOpacity>
            </View>
            <View style={styles_login.lineTop}></View>
            <Image source={require('react_files/app/images/logo.png')} style={styles_login.logo} />
            <Text style={styles_login.logowanie}>LOGOWANIE</Text>
            <View style={styles_login.containerLoginWindow}>
                <Text style={styles_login.loginText}>E-mail</Text>
                <TextInput style={styles_login.loginField} placeholder="Wprowadź e-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                <Text style={styles_login.loginText}>Hasło</Text>
                <TextInput style={styles_login.loginField} placeholder="Wprowadź hasło" placeholderTextColor="#B3B3B3" secureTextEntry onChangeText={(text) => setPassword(text)} value={password}></TextInput>
                <TouchableOpacity onPress={recoveryPress}>
                    <Text style={styles_login.forgotPassword}>Nie pamiętam hasła</Text>
                </TouchableOpacity>
                
            </View>
            <ImageBackground source={require('react_files/app/images/orzel_bialy_background.png')} style={styles_login.containerBody}>
                <Text style={styles_login.noAccount}>Nie posiadasz konta?</Text>
                <TouchableOpacity onPress={registerPress}>
                    <Text style={styles_login.register}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles_login.containerLoginConfirm, (email !== '' && password !== '') ? styles_login.containerLoginConfirmPressed : null,]} onPress={loginPress}>
                    <Text style={[styles_login.loginConfirmText, (email !== '' && password !== '') ? styles_login.loginConfirmTextPressed : null,]}>ZALOGUJ</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles_login.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_login.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_login.mc} />
                <Text style={styles_login.versionText}>wersja 0.1</Text>
            </View>
        </View>
        </ScrollView>
    );
};
export default Login;
