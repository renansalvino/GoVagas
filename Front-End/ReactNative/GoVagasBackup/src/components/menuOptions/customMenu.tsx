import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking,} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props: any) => {
    return(
        <SafeAreaView style={{ flex: 1 }}>

            {/* Para dar espaçamento */}
                <Text></Text>

            {/*Top Large Image */}
            <Image
                source={require('../../assets/images/maisVagas.png')}
                style={styles.sideMenuProfileIcon}
            />

                <Text
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                    }}>
                </Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: 190,
        height: 90,
        alignSelf: 'center',
        resizeMode:'contain',
    },
});

export default CustomSidebarMenu;