import {Entypo} from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Menu({navigation}: any){
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" style={{marginLeft: 25}} size={46} color='white' /> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        paddingTop: 8,
        backgroundColor: '#df2f2f'
    },
});