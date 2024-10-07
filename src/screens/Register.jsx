import React, { useState } from "react";
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import background from '../assests/logo.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Color from '../constant/colors';


const Register = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [mobileErr, setMobileErr] = useState('');
    const [PassErr, setPassErr] = useState('');
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [load, setLoad] = useState(false);
    const [eye, setEye] = useState(false);
 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={background} style={{ flex: 1,justifyContent:'flex-end' }} >
                <StatusBar translucent backgroundColor="transparent" />
                
                <View style={styles.loginContainer}>
                    <Text style={[styles.forget, { fontSize: 26, marginBottom: 15 }]}>Sign Up</Text>
                    <View style={styles.textInputView}>
                        <AntDesign name="mail" color="#BABABA" size={25} style={{ paddingLeft: 5 }} />
                        <TextInput
                            style={[styles.input, { marginHorizontal: 10 }]}
                            onChangeText={(text) => {
                                setMobileNumber(text);
                                setMobileErr(false);
                            }}
                            contextMenuHidden={true}
                            value={mobileNumber}
                            placeholder="Email / Phone"
                            placeholderTextColor="#BABABA"
                        />
                    </View>
                    {mobileErr ?
                        <View style={{ marginTop: 8 }}>
                            <Text style={styles.errorCode}>{mobileErr}</Text>
                        </View> : null}
                  <TouchableOpacity disabled={load ? true : false} onPress={() =>{}} activeOpacity={0.8} style={styles.signInContainer}>
                        <Text style={[styles.forget, { marginTop: 0,color:'white' }]}>Sign In</Text>
                        {load ?
                            <ActivityIndicator color={Color.white} style={{ marginLeft: 8 }} /> : null}
                    </TouchableOpacity>
                
                </View>
              
            </ImageBackground>
            </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    textInputView: { flexDirection: 'row', width: "99%", alignSelf: "center", alignItems: "center", backgroundColor: "white", height: 55, borderRadius: 8, marginTop: 15,borderWidth:1,borderColor:'#BBBBBB' },
    forget: { color: '#413E3E', fontSize: 14, fontWeight: '700', lineHeight: 35, textAlign: 'center', marginTop: 15 },
    signInContainer: {width:'100%', backgroundColor: '#ED2D2F', height: 60,alignSelf:'center',justifyContent:'center', borderRadius: 10 ,marginTop:18},
        loginContainer: { flex: 0.35, alignItems: 'center',backgroundColor:'white',justifyContent:'center',paddingHorizontal:15 ,borderTopRightRadius:15,borderTopLeftRadius:15},
    errorCode: { color: 'red', fontSize: 13, fontWeight: '400' },
    input: { color: Color.black, width: '85%' }


})
export default Register;
