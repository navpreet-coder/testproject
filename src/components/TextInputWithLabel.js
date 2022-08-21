//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';
// create a component
const TextInputWithLabel = ({label,placeholder,rightIcon,onPressRight,onChangeText=()=>{}, inputStyle={}, ...props}) => {
    //because of props we can use other properties entered like keyboardtype
    return (
        <View style={{...styles.inputStyle, ...inputStyle}}>
                <Text style={styles.labelTextStyle}>{label}</Text>
                <View style={styles.subView}>
            <TextInput 
                placeholder={placeholder}
                style={styles.inlineStyle}
                {...props}
                />
               {rightIcon? <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>

                           <Image style={{tintColor:colors.blackOpacity30}}
                            source={rightIcon}/>
                </TouchableOpacity>:null}
                </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle:{
        borderBottomWidth:1,
        borderBottomColor:colors.borderColor,
        borderRadius:moderateScale(4)
       },
    inlineStyle:{
        paddingVertical:moderateScale(8),
        fontSize:moderateScale(16),
        color:colors.blackOpacity50,
        flex:1
    },
    labelTextStyle:{
        fontSize:moderateScale(14),
        color:colors.blackOpacity80
    },
    subView:{
        justifyContent:'space-between',
        flexDirection:'row',alignItems:'center'
    }
});

//make this component available to the app
export default TextInputWithLabel;
