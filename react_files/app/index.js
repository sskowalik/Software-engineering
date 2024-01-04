import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.group3}>
      <View style={styles.rectangle13}></View>
      <View style={styles.orzelBialy3}></View>
      <View style={styles.rectangle14}></View>
      <View style={styles.rectangle15}></View>
      <View style={styles.line3}></View>
      <View style={styles.info2}></View>
      <View style={styles.coi2}></View>
      <View style={styles.znakUproszczony2}></View>
      <View style={styles.wersja01}></View>
      <View style={styles.urzedasPl}></View>
      <View style={styles.herbPolski2}></View>
      <View style={styles.image1}></View>
      <View style={styles.rectangle22}></View>
      <View style={styles.rectangle23}></View>
      <View style={styles.rectangle25}></View>
      <View style={styles.rectangle24}></View>
      <View style={styles.logowanie}></View>
      <View style={styles.email}></View>
      <View style={styles.haslo}></View>
      <View style={styles.noAccount}></View>
      <View style={styles.forgotPassword}></View>
      <View style={styles.register}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  group3: {
    width: 755,
    height: 1280,
    position: 'relative',
  },
  rectangle13: {
    width: 720,
    height: 1280,
    backgroundColor: '#FFFFFF',
    mixBlendMode: 'normal',
    position: 'absolute',
  },
  orzelBialy3: {
    width: 641,
    height: 533,
    background: { uri: '../images/orzel_bialy.png' },
    position: 'absolute',
  },
  rectangle14: {
    width: 720,
    height: 123,
    backgroundColor: '#CB3D49',
    position: 'absolute',
  },
  rectangle15: {
    width: 720,
    height: 90,
    backgroundColor: '#F2F2F2',
    position: 'absolute',
  },
  line3: {
    width: 720,
    height: 0,
    borderBottomWidth: 1,
    borderColor: '#B3B3B3',
    position: 'absolute',
  },
  info2: {
    width: 81,
    height: 81,
    background: { uri: '../images/info.png' },
    position: 'absolute',
  },
  coi2: {
    width: 183,
    height: 72,
    background: { uri: '../images/COI.png' },
    position: 'absolute',
  },
  znakUproszczony2: {
    width: 182,
    height: 81,
    background: { uri: '../images/ministerstwo_cyfryzacji.png' },
    position: 'absolute',
  },
  wersja01: {
    width: 203,
    height: 40,
    fontSize: 32,
    lineHeight: 39,
    color: '#D6D6D6',
    position: 'absolute',
  },
  urzedasPl: {
    width: 250,
    height: 53,
    fontSize: 40,
    lineHeight: 48,
    color: '#000000',
    position: 'absolute',
  },
  herbPolski2: {
    width: 49,
    height: 58,
    background: { uri: '../images/herb_Polski.png' },
    position: 'absolute',
  },
  image1: {
    width: 244,
    height: 245,
    background: { uri: '../images/image.png' },
    borderWidth: 4,
    borderColor: '#000000',
    position: 'absolute',
  },
  rectangle22: {
    width: 555,
    height: 277,
    borderWidth: 3,
    borderColor: '#D6D6D6',
    borderRadius: 40,
    position: 'absolute',
  },
  rectangle23: {
    width: 472,
    height: 56,
    borderWidth: 3,
    borderColor: '#D6D6D6',
    borderRadius: 40,
    position: 'absolute',
  },
  rectangle25: {
    width: 472,
    height: 56,
    borderWidth: 3,
    borderColor: '#D6D6D6',
    borderRadius: 40,
    position: 'absolute',
  },
  rectangle24: {
    width: 472,
    height: 56,
    borderWidth: 3,
    borderColor: '#D6D6D6',
    borderRadius: 40,
    position: 'absolute',
  },
  logowanie: {
    width: 245,
    height: 48,
    fontSize: 40,
    lineHeight: 48,
    color: '#B3B3B3',
    position: 'absolute',
  },
  email: {
    width: 74,
    height: 29,
    fontSize: 24,
    lineHeight: 29,
    color: '#B3B3B3',
    position: 'absolute',
  },
  haslo: {
    width: 66,
    height: 29,
    fontSize: 24,
    lineHeight: 29,
    color: '#B3B3B3',
    position: 'absolute',
  },
  noAccount: {
    width: 247,
    height: 29,
    fontSize: 24,
    lineHeight: 29,
    color: '#B3B3B3',
    position: 'absolute',
  },
  forgotPassword: {
    width: 228,
    height: 29,
    fontSize: 24,
    lineHeight: 29,
    color: '#656565',
    position: 'absolute',
  },
  register: {
    width: 166,
    height: 29,
    fontSize: 24,
    lineHeight: 29,
    color: '#656565',
    position: 'absolute',
  },
});

export default Home;
