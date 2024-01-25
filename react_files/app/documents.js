import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Linking  } from 'react-native';
import { styles_menu } from './style-menu';
import { styles_documents } from './style-documents';
import { useNavigation } from '@react-navigation/native';

const Documents = () => {

    const navigation = useNavigation();

    const notificationPress = () => {
        navigation.navigate('notifications');
    };
    
    const handleLinkPress = (url) => async () => {
        await Linking.openURL(url);
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
            <Text style={styles_documents.documentsHeader}>REJESTRACJA/WYREJESTROWANIE POJAZDU</Text>
            <TouchableOpacity style={[styles_documents.downloadButton]} onPress={handleLinkPress('https://obywatel.gov.pl/documents/10181/0/wniosek_o_rejestracje-wyrejestrowanie_1.pdf/5593d1d8-5a17-47a8-a78a-9b4f2944b920')}>
                <Text style={[styles_documents.downloadText]}>POBIERZ WNIOSEK</Text>
            </TouchableOpacity>
            <Text style={styles_documents.documentsHeader}>REJESTRACJA/WYREJESTROWANIE POJAZDU</Text>
            <TouchableOpacity style={[styles_documents.downloadButton]} onPress={handleLinkPress('https://obywatel.gov.pl/documents/10181/0/wniosek_o_rejestracje-wyrejestrowanie_1.pdf/5593d1d8-5a17-47a8-a78a-9b4f2944b920')}>
                <Text style={[styles_documents.downloadText]}>POBIERZ WNIOSEK</Text>
            </TouchableOpacity>
            <Text style={styles_documents.documentsHeader}>REJESTRACJA/WYREJESTROWANIE POJAZDU</Text>
            <TouchableOpacity style={[styles_documents.downloadButton]} onPress={handleLinkPress('https://obywatel.gov.pl/documents/10181/0/wniosek_o_rejestracje-wyrejestrowanie_1.pdf/5593d1d8-5a17-47a8-a78a-9b4f2944b920')}>
                <Text style={[styles_documents.downloadText]}>POBIERZ WNIOSEK</Text>
            </TouchableOpacity>
            <Text style={styles_documents.documentsHeader}>REJESTRACJA/WYREJESTROWANIE POJAZDU</Text>
            <TouchableOpacity style={[styles_documents.downloadButton]} onPress={handleLinkPress('https://obywatel.gov.pl/documents/10181/0/wniosek_o_rejestracje-wyrejestrowanie_1.pdf/5593d1d8-5a17-47a8-a78a-9b4f2944b920')}>
                <Text style={[styles_documents.downloadText]}>POBIERZ WNIOSEK</Text>
            </TouchableOpacity>
            <Text style={styles_documents.documentsHeader}>REJESTRACJA/WYREJESTROWANIE POJAZDU</Text>
            <TouchableOpacity style={[styles_documents.downloadButton]} onPress={handleLinkPress('https://obywatel.gov.pl/documents/10181/0/wniosek_o_rejestracje-wyrejestrowanie_1.pdf/5593d1d8-5a17-47a8-a78a-9b4f2944b920')}>
                <Text style={[styles_documents.downloadText]}>POBIERZ WNIOSEK</Text>
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
export default Documents;
