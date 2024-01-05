import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles_login } from './style-container-top-login';
const Login = () => {
    return (
        <View style={styles_login.container}>
            <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski2} />
            <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
            <Image source={require('react_files/app/images/info.png')} style={styles_login.info2} />
            <View style={styles.line3}></View>

        </View>



                // <View style={styles.rectangle13}></View>
                // {/* <Image source={require('react_files/app/images/orzel_bialy.png')} style={styles.orzelBialy3} /> */}
                // <View style={styles.rectangle14}></View>
                // <View style={styles.rectangle15}></View>
                // {/* <Image source={require('react_files/app/images/COI.png')} style={styles.coi2} />
                // <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles.znakUproszczony2} /> */}
                // {/* <Text style={styles.wersja01}>wersja 0.1</Text>

                // {/* <Image source={require('react_files/app/images/logo.png')} style={styles.image1} /> */}
                // <View style={styles.rectangle22}></View>
                // <View style={styles.rectangle23}></View>
                // <View style={styles.rectangle25}></View>
                // <View style={styles.rectangle24}></View>
                // {/* <Text style={styles.logowanie}>LOGOWANIE</Text>
                // <Text style={styles.email}>E-mail</Text>
                // <Text style={styles.haslo}>Hasło</Text>
                // <Text style={styles.noAccount}>Nie posiadasz konta?</Text>
                // <Text style={styles.forgotPassword}>Nie pamiętasz hasła?</Text>
                // <Text style={styles.register}>Zarejestruj się</Text> */}
    
    );
};
export default Login;
