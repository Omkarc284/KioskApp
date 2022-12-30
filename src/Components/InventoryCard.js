import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Coconut from '../../assets/svg/Coconut.svg'

const InventoryCard = props => {
    
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{justifyContent: 'center'}}>
                        <View style={styles.icon}>
                            <View style={{padding: 12}}>
                                <Coconut/>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent:'center', marginHorizontal: 24}}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.subtitle}>{props.count} units</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity 
                            style={styles.next}
                            onPress={()=>{
                                
                                props.navigation.navigate('Add Inventory', {
                                    title: props.title,
                                    count: props.count,
                                    navigation: props.navigation
                                })
                                
                            }}
                        >
                            <View style={{justifyContent: 'center', alignContent:'center'}}>
                                <Text style={{fontSize: 42}}>{'>'}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </View>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    },
    title:{
        fontSize: 24,
        fontWeight: '900',
        color: '#4A4B4D'
    },
    subtitle:{
        fontSize: 14,
        fontWeight: '300',
        color: '#B6B7B7'
    },
    box:{
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'center',
        marginLeft: 100,
        marginRight: 54,
        height: 120,
        backgroundColor:'#FFFFFF',
        borderRadius: 20,
        shadowColor:'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 9},
        shadowRadius: 20,
        elevation: 9,
    },
    icon:{
        marginLeft: -40,
        alignSelf: 'flex-start',
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        shadowColor:'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 20,
        elevation: 10,
        backgroundColor:'#FFFFFF'
    },
    next:{
        marginRight: -36,
        alignItems: 'center',
        alignSelf:'flex-end',
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        shadowColor:'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 20,
        elevation: 13,
        backgroundColor:'#FFFFFF'
    }
})

export default InventoryCard;