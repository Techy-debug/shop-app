import React, { useContext } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { GlobalContext } from '../store/GlobalState'
import { FlatList } from 'react-native-gesture-handler'


const OrderScreen = props => {

    const { state } = useContext(GlobalContext)

    const orderedIds = state.orders.map(obj => obj.id)
    const orderedItems = state.products.filter(x => orderedIds.includes(x.id))

    function renderList({ item }) {
        return (
            <View style={{alignItems: 'center'}}>
                <ImageBackground source={{ uri: item.imageUrl }} style={{ width: 250, height: 150, padding: 10, margin: 10, borderRadius: 20, overflow: 'hidden' }}>
                    {/* <Text>{item.Title}</Text> */}
                </ImageBackground>
            </View>
        )
    }

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Previous Orders</Text>
            </View>
            <FlatList
                data={orderedItems}
                keyExtractor={(v, i) => i.toString()}
                renderItem={renderList}
            />
        </View>
    )
}


export default OrderScreen;