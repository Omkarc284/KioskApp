import React from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView, Dimensions  } from 'react-native';
import { TextInput } from 'react-native-paper';
import InventoryCard from '../Components/InventoryCard';
const { height } = Dimensions.get('window');

const InventoryScreen = (props) => {
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
           <View>
             
            <View >
                <View style={styles.screen}>
                    <Text style={styles.title}>Product</Text>
                    
                    
                </View>
                <View
                    style={{ 
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <TextInput 
                    style={styles.searchbox} 
                    underlineColor='transparent'
                    placeholder='Search Product'
                    left={<TextInput.Icon icon="magnify" size={35} />}
                />
            </View>
            <View style={styles.list}>
                <InventoryCard title="Rice Bag" count='30' navigation={props.navigation}/>
                <InventoryCard title="Coconut" count='20' navigation={props.navigation}/>
                <InventoryCard title="Rice Bag" count='30' navigation={props.navigation}/>
                <InventoryCard title="Coconut" count='20' navigation={props.navigation}/>
                <InventoryCard title="Rice Bag" count='30' navigation={props.navigation}/>
            </View>
            <View  style={styles.design}></View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        overflow: 'scroll',
        flexGrow: 1,
    },
    design:{
        borderTopRightRadius: 45,
        borderBottomRightRadius: 45,
        marginTop: 256,
        position: 'absolute',
        width: "35%",
        height: height,
        backgroundColor: '#1182AE',
        zIndex: -5
    },
    screen: {
        margin: 36
    },
    title: {
        color:'#000F4D',
        fontSize: 32,
        fontWeight: '500'
    },
    subtitle: {
        color:'#000F4D',
        fontSize: 18,
        fontWeight: '300'
    },
    searchbox:{
        fontSize: 18,
        overflow: 'hidden',
        borderRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        margin: 36,
        height: 60
    },
    list:{
     marginTop: 50,
    }

});

export default InventoryScreen;