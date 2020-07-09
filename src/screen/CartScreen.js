import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native'
import { GlobalContext } from '../store/GlobalState';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../constants/Colors'

function CartScreen(props) {

    const { cartItem, state, DeleteCartItem, orderItem } = useContext(GlobalContext)
    const cartIds = cartItem.map(v => v.id)
    const AddedItems = state.products.filter(x => cartIds.includes(x.id))
    const payableAmount = AddedItems.map(product => product.Price).reduce((acc, cur) => acc + cur, 0)

    function renderCartList({ item }) {

        return (
            <View style={styles.container}>

                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Product Detail', { id: item.id, fromCart: true })}>
                        <ImageBackground source={{ uri: item.imageUrl }} style={styles.imgContainer}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                                <Text style={{ padding: 5, fontSize: 20, fontWeight: 'bold' }}>{item.Title}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={styles.bottomContainer}>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text>$ {item.Price}</Text>
                        </View>
                        <Button title="  Remove  " color='#dc3545' onPress={() => DeleteCartItem({ id: item.id })} />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={{alignItems: 'center'}}>
            <View style={{ width: 300, height: 150, elevation: 1, padding: 20, marginVertical: 20, borderRadius: 20, backgroundColor: '#fff' }}>
                <Text>Due to COVID-19 All cusotmer can purchase only one quantity</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '50%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Total: <Text>$ {payableAmount}</Text></Text>
                    </View>
                    <View style={{ width: '50%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Items: {cartItem.length}</Text>
                    </View>
                </View>
                <View>
                    <Button title="order" color="green" onPress={() => orderItem()}/>
                </View>
            </View>
            </View>
            <FlatList
                data={AddedItems}
                keyExtractor={(v, i) => v.id.toString()}
                renderItem={renderCartList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    wrapper: {
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5
        // borderWidth: 5
    },
    imgContainer: {
        width: 250,
        height: 150
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2'
    }
})

export default CartScreen;

