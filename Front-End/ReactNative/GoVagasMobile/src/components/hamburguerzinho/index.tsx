import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Home from '../../pages/home';
import Login from '../../pages/login';

export default function Menu({ navigation }: any) {
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" style={{ marginLeft: 25 }} size={46} color='white' />
            </TouchableOpacity>
            {/* <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home Empresa"
                    component={Home}
                />
                <Drawer.Screen
                    name="Sair"
                    component={Login}
                />
            </Drawer.Navigator> */}
        </View>
    );
}
// const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
    menu: {
        paddingTop: 8,
        backgroundColor: '#df2f2f'
    },
});