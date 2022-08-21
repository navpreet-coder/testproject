import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    imgStyle: {
        height: moderateScale(200),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTextStyle: {
        fontSize: scale(32),
        fontWeight: 'bold',
        color: '#fff'
    },
    mainStyle: {
        paddingHorizontal: moderateScale(24),
        paddingTop: moderateVerticalScale(44),
    },
    forgotView: {
        alignSelf: 'flex-end'
        , marginVertical: moderateVerticalScale(24)
    },
    forgotText: {
        color: colors.themeColor,
        fontWeight: '300',
        fontSize: scale(16)
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center', alignItems: 'center',
        justifyContent: 'center',
        //  marginTop: moderateVerticalScale(72)
        marginBottom:moderateVerticalScale(40)
    },
})

export default styles;