import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ListScreen from "./src/screens/ListScreen";
import InventoryScreen from "./src/screens/InventoryScreen"
import SaleScreen from "./src/screens/SaleScreen";
import DashboardScreen from "./src/screens/DashboardScreen"

import { useState } from "react";
import AddInventory from "./src/screens/AddInventory";
import AddSale from "./src/screens/AddSale";
import Rating from "./src/screens/Review";

// const [kioskName, setKioskName] = useState('');
// const [isLoggedIn, setIsLoggedIn] = useState(false);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Inventory: InventoryScreen,
    Sale: SaleScreen,
    Dashboard: DashboardScreen,
    'Add Inventory': AddInventory,
    'Create Sale': AddSale,
    Ratings: Rating,
    List: ListScreen
  },
  {
    initialRouteName: "Login",
    
  }
);

export default createAppContainer(navigator);
