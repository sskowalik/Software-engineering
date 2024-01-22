import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_offices } from './style-offices';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import voivodeshipData from './voivodeships';
import { getDistrictsForVoivodeship, getCommunesForDistrict, handleVoivodeshipChange, handleDistrictChange,} from './voivodeshipsFunctions';

const Offices = () => {

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };
    
    const [selectedVoivodeship, setSelectedVoivodeship] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedCommune, setSelectedCommune] = useState(null);

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
                <Text style={styles_offices.officesHeader}>Wyszukaj informacje o urzędach</Text>
                <Text style={styles_offices.officesText}>Odnajdź poszukiwany urząd, aby zobaczyć informacje o nim! </Text>
                <Text style={styles_offices.officesFormText}>Województwo</Text>
                <Picker selectedValue={selectedVoivodeship} onValueChange={(itemValue) => handleVoivodeshipChange(itemValue, setSelectedVoivodeship, setSelectedDistrict, setSelectedCommune)} style={styles_offices.officesForm}>
                    <Picker.Item label="Wybierz województwo" value={null} />{Object.keys(voivodeshipData).map((voivodeship, index) => (<Picker.Item key={index} label={voivodeship} value={voivodeship} />))}
                </Picker>
                <Text style={styles_offices.officesFormText}>Powiat</Text>
                <Picker selectedValue={selectedDistrict} onValueChange={(itemValue) => handleDistrictChange(itemValue, setSelectedDistrict, setSelectedCommune)} style={styles_offices.officesForm} enabled={selectedVoivodeship !== null}>
                     <Picker.Item label="Wybierz powiat" value={null} />{getDistrictsForVoivodeship(selectedVoivodeship, voivodeshipData).map((district, index) => (<Picker.Item key={index} label={district} value={district} />))}
                </Picker>
                <Text style={styles_offices.officesFormText}>Gmina</Text>
                <Picker selectedValue={selectedCommune} onValueChange={(itemValue) => setSelectedCommune(itemValue)} style={styles_offices.officesForm} enabled={selectedDistrict !== null}>
                    <Picker.Item label="Wybierz gminę" value={null} />{getCommunesForDistrict(selectedVoivodeship, selectedDistrict, voivodeshipData).map((commune, index) => (<Picker.Item key={index} label={commune} value={commune} />))}
                </Picker>
                <TouchableOpacity style={[styles_offices.SubmitButton]}>
                    <Text style={[styles_offices.SubmitText]}>WYSZUKAJ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles_menu.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_menu.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_menu.mc} />
                <Text style={styles_menu.versionText}>wersja 0.1</Text>
            </View>
        </View>
    );
};
export default Offices;
