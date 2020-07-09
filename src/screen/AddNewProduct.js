import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import Colors from '../constants/Colors'

const AddNewProduct = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.heading}>
                <Text style={{ fontSize: 20 }}>Add New Product !!!</Text>
            </View>
            <View>
                <View style={styles.span}>
                    <View style={{ marginHorizontal: 20,  flex: 1 }}>
                        <Text>Title:</Text>
                    </View>
                    <View style={{ width: 150, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.span}>
                    <View style={{ marginHorizontal: 20,  flex: 1 }}>
                        <Text>Price:</Text>
                    </View>
                    <View style={{ width: 150, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.span}>
                    <View style={{ marginHorizontal: 20,  flex: 1 }}>
                        <Text>Description:</Text>
                    </View>
                    <View style={{ width: 150, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.span}>
                    <View style={{ marginHorizontal: 20,  }}>
                        <Text>ImageUrl:</Text>
                    </View>
                    <View style={{ width: 150, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <TextInput />
                    </View>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button title="Add" color={Colors.primary} width={50} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    span: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    heading: {
        marginVertical: 20,
        alignItems: 'center',
    },
    btnContainer: {
        width: '50%',
        marginTop: 25
    }
})

export default AddNewProduct
