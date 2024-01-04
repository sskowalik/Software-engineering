import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YourComponent = () => {
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
const styles = StyleSheet.create({
    /* Mask group */
    maskGroup: {
      position: 'absolute',
      width: 755,
      height: 1280,
    },
  
    /* Group 3 */
    group3: {
      position: 'absolute',
      width: 755,
      height: 1280,
    },
  
    /* Rectangle 13 */
    rectangle13: {
      position: 'absolute',
      left: '0%',
      right: '4.64%',
      top: '0%',
      bottom: '0%',
      background: '#FFFFFF',
      mixBlendMode: 'normal',
    },
  
    /* orzel_bialy 3 */
    orzelBialy3: {
      position: 'absolute',
      left: '10.46%',
      right: '4.64%',
      top: '48.75%',
      bottom: '9.61%',
      background: { uri: 'orzel_bialy.png' },
    },
  
    /* Rectangle 14 */
    rectangle14: {
      position: 'absolute',
      left: '0%',
      right: '4.64%',
      top: '90.39%',
      bottom: '0%',
      background: '#CB3D49',
    },
  
    /* Rectangle 15 */
    rectangle15: {
      position: 'absolute',
      left: '0%',
      right: '4.64%',
      top: '0%',
      bottom: '92.97%',
      background: '#F2F2F2',
    },
  
    /* Line 3 */
    line3: {
      position: 'absolute',
      left: '0%',
      right: '4.64%',
      top: '7.03%',
      bottom: '92.97%',
      border: '1px solid #B3B3B3',
    },
  
    /* info 2 */
    info2: {
      position: 'absolute',
      left: '83.97%',
      right: '5.3%',
      top: '0.39%',
      bottom: '93.28%',
      background: { uri: 'info.png' },
      backgroundSize: 'cover',
    },
  
    /* COI 2 */
    coi2: {
      position: 'absolute',
      left: '3.31%',
      right: '72.45%',
      top: '92.42%',
      bottom: '1.95%',
      background: { uri: '../images/COI.png' },
      backgroundSize: 'cover',
    },
  
    /* 05_znak_uproszczony_kolor_biale_tlo 2 */
    znakUproszczony2: {
      position: 'absolute',
      left: '28.74%',
      right: '47.15%',
      top: '92.03%',
      bottom: '1.64%',
      background: { uri: '../images/05_znak_uproszczony_kolor_biale_tlo.png' },
      backgroundSize: 'cover',
    },
  
    /* wersja 0.1 */
    wersja01: {
      position: 'absolute',
      left: '73.11%',
      right: '0%',
      top: '95.94%',
      bottom: '0.94%',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 32,
      lineHeight: 39,
      color: '#D6D6D6',
    },
  
    /* URZĘDAS.PL */
    urzedasPl: {
      position: 'absolute',
      left: '38.15%',
      right: '28.74%',
      top: '1.41%',
      bottom: '94.45%',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 40,
      lineHeight: 48,
      color: '#000000',
    },
  
    /* Herb_Polski 2 */
    herbPolski2: {
      position: 'absolute',
      left: '29.8%',
      right: '63.71%',
      top: '1.25%',
      bottom: '94.22%',
      background: { uri: '../images/Herb_Polski.png' },
      backgroundSize: 'cover',
    },
  
    /* image 1 */
    image1: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '31.52%',
      right: '36.16%',
      top: '10.47%',
      bottom: '70.39%',
      background: { uri: '../images/image.png' },
      backgroundSize: 'cover',
      border: '4px solid #000000',
    },
  
    /* Rectangle 22 */
    rectangle22: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '10.46%',
      right: '16.03%',
      top: '34.84%',
      bottom: '43.52%',
      border: '3px solid #D6D6D6',
      borderRadius: 40,
    },
  
    rectangle23: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: '15.5%',
        right: '21.99%',
        top: '38.83%',
        bottom: '56.8%',
        border: '3px solid #D6D6D6',
        borderRadius: 40,
      },
    
      /* Rectangle 25 */
      rectangle25: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: '15.5%',
        right: '21.99%',
        top: '48.12%',
        bottom: '47.5%',
        border: '3px solid #D6D6D6',
        borderRadius: 40,
      },
    
      /* Rectangle 24 */
      rectangle24: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: '15.5%',
        right: '21.99%',
        top: '38.83%',
        bottom: '56.8%',
        border: '3px solid #D6D6D6',
        borderRadius: 40,
      },
    
      /* LOGOWANIE */
      logowanie: {
        position: 'absolute',
        left: '31.52%',
        right: '36.03%',
        top: '31.09%',
        bottom: '65.16%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 48,
        color: '#B3B3B3',
      },
    
      /* E-mail */
      email: {
        position: 'absolute',
        left: '18.81%',
        right: '71.39%',
        top: '36.56%',
        bottom: '61.17%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#B3B3B3',
      },
    
      /* Hasło */
      haslo: {
        position: 'absolute',
        left: '18.81%',
        right: '72.45%',
        top: '45.86%',
        bottom: '51.88%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#B3B3B3',
      },
    
      /* Nie posiadasz konta? */
      noAccount: {
        position: 'absolute',
        left: '15.5%',
        right: '51.79%',
        top: '56.48%',
        bottom: '41.25%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#B3B3B3',
      },
    
      /* Nie pamiętam hasła */
      forgotPassword: {
        position: 'absolute',
        left: '45.7%',
        right: '24.11%',
        top: '52.5%',
        bottom: '45.23%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#656565',
      },
    
      /* Zarejestruj się */
      register: {
        position: 'absolute',
        left: '15.5%',
        right: '62.52%',
        top: '58.75%',
        bottom: '38.98%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#656565',
      },
  
  });
  
  export default styles;