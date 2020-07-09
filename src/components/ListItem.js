import React, { useContext } from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { GlobalContext } from '../store/GlobalState';



function ListItem(props) {

    const { AddCartItem } = useContext(GlobalContext)

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Product Detail', { id: props.id, fromCart: false })}>
                    <ImageBackground source={{ uri: props.img }} style={styles.imgContainer}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={{ fontSize: 18, textAlign: 'center' }}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.bottomContainer}>
                    <View style={{ ...styles.cartBtn, backgroundColor: '#eaeded', overflow: 'hidden' }}>
                        <Text style={{ fontSize: 20 }}>${props.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.cartBtn} onPress={() => AddCartItem({ id: props.id })}>
                        <Text style={{ color: 'white' }}>{props.inCart ? 'Added' : 'Add to Cart'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

// {alignItems: 'center', justifyContent: 'center', width: '50%', backgroundColor: 'yellow', border}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 250,
        height: 150,
        marginHorizontal: 30,
        marginVertical: 30,
        borderRadius: 10,
        elevation: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // borderWidth: 1,
        borderBottomEndRadius: 10,
        overflow: 'hidden',
        // borderColor: Colors.five,
        marginBottom: 50

    },
    cartBtn: {
        backgroundColor: Colors.third,
        height: 30,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContainer: {
        flex: 1,
        width: 250,
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden'
    },
})

export default ListItem;