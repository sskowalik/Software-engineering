import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput, StyleSheet } from 'react-native';
import { styles_login } from './style-login';
import { styles_register } from './style-register';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setPassword1] = useState('');
  const [name, setName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [pesel, setPesel] = useState(null);
  const [birthplace, setBirthplace] = useState(null);
  const [domicile, setDomicile] = useState(null);
  const [mothersName, setMothersName] = useState(null);
  const [fathersName, setFathersName] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();
  const recoverPress = () => {
    navigation.navigate('index');
    Alert.alert('Tymczasowe hasło zostało wysłane!', 'Sprawdź swojego maila i koniecznie zmień hasło przy następnym logowaniu!.');
  };
  const infoPress = () => {
    navigation.navigate('info');
    Alert.alert('Przycisk został naciśnięty!', 'Dodatkowa wiadomość.');
  };

  return (
    <ScrollView>
      <View style={styles_register.container}>
        <View style={styles_login.containerTopBar}>
          <Image source={require('react_files/app/images/herb_Polski.png')} style={styles_login.herbPolski} />
          <Text style={styles_login.urzedasPl}>URZĘDAS.PL</Text>
          <TouchableOpacity onPress={infoPress}>
            <Image source={require('react_files/app/images/info.png')} style={styles_login.info} />
          </TouchableOpacity>
        </View>
        <View style={styles_login.lineTop}></View>
        <View style={styles_register.containerPassRegWindow}>
          <Text style={styles_register.regHeader}>Dołącz do serwisu! Ułatw sobie załatwienie urzędowych spraw!</Text>
          <Text style={styles_register.regText}>Wypełnij formularz i uzyskaj dostęp do rezerwacji terminów. Pamiętaj, żeby podawać prawidłowe dane - będą one weryfikowane przy każdej wizycie w urzędzie! </Text>
          <Text style={styles_register.regFormText}>E-mail</Text>
          <TextInput style={styles_register.regForm} placeholder="..." keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
          <Text style={styles_register.regFormText}>Hasło</Text>
          <TextInput style={styles_register.regForm} placeholder="..." placeholderTextColor="#B3B3B3" secureTextEntry onChangeText={(text) => setPassword(text)} value={password}></TextInput>
          <Text style={styles_register.regFormText}>Potwierdź hasło</Text>
          <TextInput style={styles_register.regForm} placeholder="..." placeholderTextColor="#B3B3B3" secureTextEntry onChangeText={(text) => setPassword1(text)} value={confPassword}></TextInput>
          <Text style={styles_register.regFormText}>Imię</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setName(text)} value={name}></TextInput>
          <Text style={styles_register.regFormText}>Drugie imię</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setSecondName(text)} value={secondName}></TextInput>
          <Text style={styles_register.regFormText}>Nazwisko</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setSurname(text)} value={surname}></TextInput>
          <Text style={styles_register.regFormText}>Data urodzenia</Text>
          <TouchableOpacity style={styles_register.regForm} onPress={() => setShowDatePicker(true)}>
            <Text style={styles_register.dateText}>{dateOfBirth ? formatDate(dateOfBirth) : 'Wybierz datę'}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              mode="date"
              value={dateOfBirth}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                const currentDate = selectedDate || dateOfBirth;
                setDateOfBirth(currentDate);
              }}
              onTouchCancel={() => setShowDatePicker(false)}
              onTouchEnd={() => setShowDatePicker(true)}
            />
          )}
          <Text style={styles_register.regFormText}>PESEL</Text>
          <TextInput style={styles_register.regForm} placeholder="..." keyboardType="numeric" autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setPesel(text)} value={pesel}></TextInput>
          <Text style={styles_register.regFormText}>Miejsce urodzenia</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setBirthplace(text)} value={birthplace}></TextInput>
          <Text style={styles_register.regFormText}>Miejsce zameldowania</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setDomicile(text)} value={domicile}></TextInput>
          <Text style={styles_register.regFormText}>Imię matki</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setMothersName(text)} value={mothersName}></TextInput>
          <Text style={styles_register.regFormText}>Imię ojca</Text>
          <TextInput style={styles_register.regForm} placeholder="..." autoCapitalize="none" placeholderTextColor="#B3B3B3" onChangeText={(text) => setFathersName(text)} value={fathersName}></TextInput>
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

export default Registration;
