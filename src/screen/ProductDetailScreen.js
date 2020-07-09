import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { GlobalContext } from '../store/GlobalState'
import Colors from '../constants/Colors'


function ProductDetailScreen(props) {

    const { state, AddCartItem, cartItem } = useContext(GlobalContext)
    const id = props.route.params.id
    let fromCart = props.route.params.fromCart
    const [productDetail] = state.products.filter(v => v.id === id)

    cartItem.forEach(product => {
        if(product.id === id) fromCart = true      
    })

    return (
        <View>
            <View style={styles.imgContainer}>
                <Image source={{ uri: productDetail.imageUrl }} style={styles.img} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{productDetail.Title}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}> $: {productDetail.Price}</Text>
                <Text style={styles.offer}>  {Math.floor((Math.random() * 20) + 10)}% off</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text>Description: {productDetail.Description}</Text>
            </View>
            <View style={styles.cartBtnContainer}>
                { fromCart ? <Text></Text> : <Button title='     Add to Cart     ' color={Colors.primary}
                onPress={() => {
                    AddCartItem({id: productDetail.id})
                    props.navigation.navigate('Cart')
                    fromCart = false
                }}/>}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 300, height: 230
    },
    imgContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    titleContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    priceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    price: {
        fontSize: 20
    },
    offer: {
        fontSize: 10,
        paddingTop: 5,
        color: 'green'
    },
    descriptionContainer: {
        alignItems: "center",
        marginVertical: 30,
        marginHorizontal: 30
    },
    cartBtnContainer: {
        alignItems: 'center',
    }
})

export default ProductDetailScreen;