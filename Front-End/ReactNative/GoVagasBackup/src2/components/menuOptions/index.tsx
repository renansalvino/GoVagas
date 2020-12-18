import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'expo';
import { Entypo } from '@expo/vector-icons';
import Home from '../../pages/home/index';
import Cadastro from '../../pages/cadastro/index';
import Login from '../../pages/login/index';
import CustomMenu from './CustomMenu';

const Drawer = createDrawerNavigator();

export default function ScreensMenu() {
    return (
        // <Drawer.Navigator
        //     initialRouteName="Login"

        //     drawerStyle={{
        //         backgroundColor: '#F1F1F1',
        //         paddingVertical: 15,

        //     }}
        //     drawerContentOptions={{
        //         activeTintColor: '#FFFFFFF',
        //         activeBackgroundColor: '#ef1313',
        //     }}
        //    // drawerContent={(props) => <CustomMenu {...props} />}
        // >
        //     <Drawer.Screen
        //         name="Home"
        //         component={Home}
        //         options={
        //             {
        //                 //focused é una prop em boleano para indicar ser o menu é selecionado ou não
        //                 drawerLabel: (({ focused }) => <Text style={
        //                     {
        //                         color: focused ? 'white' : '#DA251C',
        //                         fontSize: 18,
        //                     }}>Home</Text>),

        //                 drawerIcon: (({ focused }) => <Entypo name='home' size={24} color={focused ? 'white' : '#DA251C'} />)
        //             }
        //         }
        //     />
            {/* <Drawer.Screen
                name="Empresa"
                component={Empresa}
                options={
                    {
                        //focused é una prop em boleano para indicar ser o menu é selecionado ou não
                        drawerLabel: (({ focused }) => <Text style={
                            {
                                color: focused ? '#FFF' : '#000000',
                                fontSize: 18,
                            }}>Empresa</Text>),

                        drawerIcon: (({ focused }) => <Entypo name='clipboard' size={24} color={focused ? '#FFFFFF' : '#000000'} />)
                    }
                }
            /> */}

            /* <Drawer.Screen
                name="Login"
                component={Login}
                options={
                    {
                        //focused é una prop em boleano para indicar ser o menu é selecionado ou não
                        drawerLabel: (({ focused }) => <Text style={
                            {
                                color: focused ? 'white' : '#DA251C',
                                fontSize: 18,
                            }}>Login</Text>),
                        drawerIcon: (({ focused }) => <Entypo name='login' size={24} color={focused ? 'white' : '#DA251C'} />)
                    }
                }
            />
        </Drawer.Navigator> */
    );
}