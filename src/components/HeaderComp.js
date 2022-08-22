//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import imagePath from '../constants/imagePath';

const HeaderComp = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={imagePath.back} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HeaderComp;
