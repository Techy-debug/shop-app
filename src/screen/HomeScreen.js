import React, { useContext } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { GlobalContext } from '../store/GlobalState';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem'

function HomeScreen(props) {

    const { state, cartItem } = useContext(GlobalContext)
    let products = state.products

    const renderList = ({ item }) => {

        let inCart = false
        cartItem.forEach(cartProduct => {
            if(cartProduct.id === item.id) inCart = true
        })

        return (
            <ListItem img={item.imageUrl} title={item.Title} price={item.Price} navigation={props.navigation} id={item.id}  inCart={inCart}/>
        )
    }

    return (
        <View style={{ width: '100%', flex: 1 }}>
            <FlatList
                data={products}
                keyExtractor={(v, i) => i.toString() }
                renderItem={renderList}
            />
        </View>
    )
}

export default HomeScreen;