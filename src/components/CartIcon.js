import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { GlobalContext } from '../store/GlobalState'
import { TouchableOpacity } from 'react-native-gesture-handler'


function CartIcon(props) {
  // return <Ionicons 
  // name="md-cart" size={28} 
  // color={Colors.secondary} 
  // style={{paddingRight: 20}} 
  // onPress={props.onPress}/>

  const { cartItem } = useContext(GlobalContext)
  const badgeCount = cartItem.length;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ width: 24, height: 24, margin: 20 }} onPress={() => console.log('Somehting')}>
      <Ionicons name="md-cart" size={28} color={Colors.secondary} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'white',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
    </TouchableOpacity>
  )

}

export default CartIcon