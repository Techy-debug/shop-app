import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screen/HomeScreen'
import CartScreen from '../screen/CartScreen'
import OrderScreen from '../screen/OrderScreen';
import MyProducts from '../screen/MyProducts';
import ProductDetailScreen from '../screen/ProductDetailScreen'
import { StatusBar } from 'expo-status-bar';
import Colors from '../constants/Colors';
import AddNewProduct from '../screen/AddNewProduct';
import CartIcon from '../components/CartIcon';



//default Stack Options
const defaultStackScreenOption = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.secondary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

const headerBurger = (navigation) => {
    return <Ionicons name="ios-menu" size={28} color="#a9dfbf" style={{ paddingLeft: 10 }} onPress={() => navigation.toggleDrawer()} />
}



const Stack = createStackNavigator()

function StackNav({ navigation }) {
    
    return (
        <Stack.Navigator
        screenOptions={defaultStackScreenOption}
      >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Shop',
                    headerLeft: () => headerBurger(navigation),
                    headerRight: () => {
                        return <CartIcon onPress={() => navigation.navigate('Cart')} />
                    }
                    
                }}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
        </Stack.Navigator>

    )
}

const orderStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={defaultStackScreenOption}>
            <Stack.Screen name="Orders" component={OrderScreen} options={{
                headerLeft:() => headerBurger(navigation)
            }}/>
        </Stack.Navigator>
    )
}


const MyProductStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={defaultStackScreenOption}>
            <Stack.Screen name="My Products" component={MyProducts} options={{
                headerLeft: () => headerBurger(navigation),
                headerRight: () => {
                    return <Ionicons name="ios-add-circle" size={28} color={Colors.secondary} style={{paddingRight: 20}} onPress={() => navigation.navigate('Add new Product')}/>
                }
            }}/>
            <Stack.Screen name="Add new Product" component={AddNewProduct} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator()

function AppNavigator() {
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <Drawer.Navigator>
                <Drawer.Screen name="Shop" component={StackNav} />
                <Drawer.Screen name="Order" component={orderStack} />
                <Drawer.Screen name="MyProducts" component={MyProductStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator