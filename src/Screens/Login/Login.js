import React from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import ButtonComp from '../../components/ButtonComp';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
const Login = ({navigation}) => {
    const[isVisible,setIsVisible] = React.useState(false)
    const navigateTo=(pageName)=>{
        navigation.navigate(pageName)
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} translucent/>
            <View>
            <ImageBackground source={{uri:'https://images.unsplash.com/photo-1551934262-db2d7dd517f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aGVyJTIwYW5kJTIwYmFieXxlbnwwfHwwfHw%3D&w=1000&q=80'}}
            style={styles.imgStyle}
            >
                <Text style={styles.loginTextStyle}>LOGIN</Text>
            </ImageBackground>
            <View style={styles.mainStyle}>

           <TextInputWithLabel label={'Email Address'} placeholder={'Enter Email Address'} 
           inputStyle={{marginBottom:moderateVerticalScale(28)}}
           keyboardType={'email-address'}
           />
           <TextInputWithLabel label={'Password'} 
           placeholder={'Enter Password'} secureTextEntry={isVisible?false:true}
           rightIcon={isVisible? imagePath.hideEye: imagePath.showEye}
           onPressRight={()=>setIsVisible(!isVisible)}
           />

           <TouchableOpacity style={styles.forgotView} activeOpacity={0.7}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
           </TouchableOpacity>

           <ButtonComp onPress={()=>alert('login pressed')}
           btnText="login"
           />
    </View>
            </View>
           <View style={styles.bottomView}>
            <Text style={{fontSize:scale(13),color:colors.blackOpacity50}}>Not a Member </Text>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=> navigateTo(navigationStrings.CHOOSEACCOUNT)}
            >
                <Text style={{fontWeight:'bold',fontSize:scale(13),color:colors.blackOpacity80}}>Join Now</Text>
            </TouchableOpacity>
           </View>
        </View>
    );
};

export default Login;
