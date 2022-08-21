import { Login, Register, SetPassword, ChooseAccount, ForgotPassword } from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import navigationStrings from '../constants/navigationStrings'
const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
    

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navigationStrings.SETPASSWORD} component={SetPassword} />
            <Stack.Screen name={navigationStrings.CHOOSEACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navigationStrings.FORGOTPASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    )
}