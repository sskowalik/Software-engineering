import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_visitPlanner } from './style-visitPlanner';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import provinceData from './provinces';
import { getDistrictsForProvince, getCommunesForDistrict, handleProvinceChange, handleDistrictChange,} from './provincesFunctions';

const VisitPlanner = () => {

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };

    const [selectedProvince, setSelectedProvince] = useState(null);
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
                <Text style={styles_visitPlanner.officesHeader}>Wybierz urząd do którego chcesz się udać!</Text>
                <Text style={styles_visitPlanner.officesFormText}>Województwo</Text>
                <Picker selectedValue={selectedProvince} onValueChange={(itemValue) => handleProvinceChange(itemValue, setSelectedProvince, setSelectedDistrict, setSelectedCommune)} style={styles_visitPlanner.officesForm}>
                    <Picker.Item label="Wybierz województwo" value={null} />{Object.keys(provinceData).map((province, index) => (<Picker.Item key={index} label={province} value={province} />))}
                </Picker>
                <Text style={styles_visitPlanner.officesFormText}>Powiat</Text>
                <Picker selectedValue={selectedDistrict} onValueChange={(itemValue) => handleDistrictChange(itemValue, setSelectedDistrict, setSelectedCommune)} style={styles_visitPlanner.officesForm} enabled={selectedProvince !== null}>
                     <Picker.Item label="Wybierz powiat" value={null} />{getDistrictsForProvince(selectedProvince, provinceData).map((district, index) => (<Picker.Item key={index} label={district} value={district} />))}
                </Picker>
                <Text style={styles_visitPlanner.officesFormText}>Gmina</Text>
                <Picker selectedValue={selectedCommune} onValueChange={(itemValue) => setSelectedCommune(itemValue)} style={styles_visitPlanner.officesForm} enabled={selectedDistrict !== null}>
                    <Picker.Item label="Wybierz gminę" value={null} />{getCommunesForDistrict(selectedProvince, selectedDistrict, provinceData).map((commune, index) => (<Picker.Item key={index} label={commune} value={commune} />))}
                </Picker>
                <TouchableOpacity style={[styles_visitPlanner.SubmitButton]}>
                    <Text style={[styles_visitPlanner.SubmitText]}>DALEJ</Text>
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
export default VisitPlanner;
