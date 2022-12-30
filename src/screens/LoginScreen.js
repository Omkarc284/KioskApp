import React, { useState } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

const LoginScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View style={styles.pictureView}>
                    <ImageBackground source={require('../../assets/loginbg.jpg')} resizeMode="cover" style={styles.image}>
                        
                    </ImageBackground>
                </View>
                <View style={styles.loginView}>
                    <Text style={styles.welcomeStyle}>Welcome</Text>
                    <Text style={styles.subtext}>Continue with your User ID and Password</Text>
                    
                    <View style={{margin: 36}} >
                        <TextInput style={styles.textinput} underlineColor="transparent" placeholderTextColor={'#626262'} placeholder="Username"/>
                        <TextInput 
                            style={styles.textinput} 
                            underlineColor="transparent" 
                            placeholder="Password" 
                            placeholderTextColor={'#626262'}
                            secureTextEntry={isPasswordSecure}
                            keyboardType='numeric'
                            right={
                                <TextInput.Icon
                                    style={{borderWidth: 1, borderColor: "#000F4D"}}
                                  name={() => <Ionicons name={isPasswordSecure ? "eye-off" : "eye"} size={16 } />} // where <Icon /> is any component from vector-icons or anything else
                                  onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}

                                />
                            }
                            
                        />
                        <TouchableOpacity 
                            style={styles.loginButton}
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Text style={{ color: '#fff',fontSize: 20, fontWeight:'bold' }}>Login</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            
        </View>
        
        
    )
};

const styles = StyleSheet.create({
    welcomeStyle: {
        fontSize: 36,
        color: '#1182AE',
        fontWeight: 'bold',
        paddingTop: 24
    },
    loginView: {
        flex: 0.6,
        zIndex: 1,
        alignItems: "center",
        
    },
    pictureView: {
        flex: 0.4,
        zIndex: -1,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        
    },
    subtext: {
        fontSize: 18,
        color: '#1182AE',
    },
    textinput: {
        fontSize: 20,
        marginBottom: 16,
        height: 80,
        width: 360,
        borderRadius: 20,
        borderTopStartRadius:20,
        borderTopEndRadius:20
    },
    loginButton: {
        marginTop: 32,
        padding: 10,
        backgroundColor: '#000F4D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 360,
        borderRadius: 40,
    }
});

export default LoginScreen;

