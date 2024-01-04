import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style-login';

const Login = () => {
  return (
    <View style={styles.maskGroup}>
      <View style={styles.rectangle13}></View>
      <Image style={styles.orzelBialy3} source={require('react_files\app\images\orzel_bialy.png')} />
      <View style={styles.rectangle14}></View>
      <View style={styles.rectangle15}></View>
      <View style={styles.line3}></View>
      <Image style={styles.info2} source={require('react_files\app\images\info.png')} />
      <Image style={styles.coi2} source={require('react_files\app\images\COI.png')} />
      <Image style={styles.znakUproszczony2} source={require('react_files\app\images\ministerstwo_cyfryzacji.png')} />
      <Text style={styles.wersja01}>wersja 0.1</Text>
      <Text style={styles.urzedasPl}>URZĘDAS.PL</Text>
      <Image style={styles.herbPolski2} source={require('react_files\app\images\herb_Polski.png')} />
      <Image style={styles.image1} source={require('react_files\app\images\logo.png')} />
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
  );
};

export default Login;
