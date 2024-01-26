import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles_menu } from './style-menu';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from './ConfigAxios.ts';

const Visits = () => {
    const route = useRoute();
    const { userData } = route.params;
    const [dataAcc, setdataAcc] = useState(null); // Stan przechowujący dane użytkownika
    const [visits, setVisits] = useState(null);

    useEffect(() => {
        setdataAcc(parseInt(userData?.data?.user_id)); // Konwersja na liczbę i ustawienie stanu
    }, [userData]);

    useEffect(() => {
        if (dataAcc !== null) {
            printVisits(); // Pobierz dane użytkownika po montażu komponentu
        }
    }, [dataAcc]);
   
    const printVisits = async () => {
        try {
            const response = await axios.get(`/visit/${dataAcc}`);
            setVisits(response.data); 
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };
    
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
    {visits && visits.map((visit, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
            <Text>User ID: {visit.user_id}</Text>
            <Text>Office ID: {visit.office_id}</Text>
            <Text>Visit Date: {visit.visit_date}</Text>
            <Text>Visit Time: {visit.visit_time}</Text>
            <Text>Additional Notes: {visit.additional_notes}</Text>
            <Text>Created At:  {visit.created_at}</Text>

        </View>
    ))}
    {visits && visits.length === 0 && (
        <Text>No visits found</Text>
    )}
</View>

            <View style={styles_menu.containerBottomBar}>
                <Image source={require('react_files/app/images/COI.png')} style={styles_menu.coi} />
                <Image source={require('react_files/app/images/ministerstwo_cyfryzacji.png')} style={styles_menu.mc} />
                <Text style={styles_menu.versionText}>wersja 1.0</Text>
            </View>
        </View>
    );
};

export default Visits;
