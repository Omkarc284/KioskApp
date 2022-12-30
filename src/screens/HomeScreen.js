import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView} from "react-native";
import InventoryIcon from '../../assets/svg/InventoryIcon.svg';
import Sale_icon from '../../assets/svg/Sale_Icon.svg';
import Dashboard from '../../assets/svg/DashBoardIcon.svg';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1}}>
        <View style={{ flexDirection: 'row', marginBottom: 18, alignContent:'space-around'}}>
          <View style={{flex: 0.8}}>
            <Text style={{fontSize: 18, color: '#000F4D'}}>Kiosk Name: </Text>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000F4D'}}>Nerul-Sec-20 </Text>
          </View>
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={()=> props.navigation.navigate('Login')}
          >
            <Text style={{fontSize: 18, color: '#fff', fontWeight:'bold'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{marginTop: 18, marginBottom: 18}}>
          <Text style={styles.text}>Choose your task</Text>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={styles.inventory}
            onPress={()=> props.navigation.navigate('Inventory')}
          >
            <View >
              <InventoryIcon/>
            </View>
            <View >
              <Text style={styles.headingText}>Inventory</Text>
              <Text style={styles.subHeadingText}>You can check and update the quantity of products here.</Text>
            </View>
            
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={styles.sales}
            onPress={()=> props.navigation.navigate('Sale')}  
          >
            <View >
              <Sale_icon/>
            </View>
            <View >
              <Text style={styles.headingText}>Sale</Text>
              <Text style={styles.subHeadingText}>You can Update the sale of products and keep track of bills.</Text>
            </View>
            
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={styles.dashboard}
            onPress={()=> props.navigation.navigate('Dashboard')}
          >
            <View >
              <Dashboard/>
            </View>
            <View >
              <Text style={styles.headingText}>Dashboard</Text>
              <Text style={styles.subHeadingText}>Shows overall analytics of your outlet.</Text>
            </View>
            
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={styles.ratings}
            onPress={()=> props.navigation.navigate('Ratings')}  
          >
            <View >
              <MaterialIcons name="rate-review" size={54} color="white" />
            </View>
            <View >
              <Text style={styles.headingText}>Rate Us!</Text>
              <Text style={styles.subHeadingText}>Let us know how can we serve you better!</Text>
            </View>
            
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    overflow: 'scroll',
    flexGrow: 1,
    margin: 36,
    marginBottom: 30
  },
  cardContainer:{
    height: 250,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000F4D',
  },
  logoutButton: {
    marginTop: 8,
    paddingBottom: 5,
    flex: 0.3,
    height: 48,
    borderRadius: 32,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#000F4D'
  },
  inventory: {
    padding:20,
    flex: 0.9,
    backgroundColor: '#1182AE',
    borderRadius: 20
  },
  sales: {
    padding:20,
    flex: 0.9,
    borderRadius: 20,
    backgroundColor: '#6C971F'
  },
  dashboard:{
    padding:20,
    flex: 0.9,
    borderRadius: 20,
    backgroundColor: '#E2AC62'
  },
  headingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  subHeadingText: {
    color: '#fff',
    fontSize: 16
  },
  ratings:{
    backgroundColor:'#29128A',
    padding:20,
    flex: 0.9,
    borderRadius: 20
  }
});

export default HomeScreen;
