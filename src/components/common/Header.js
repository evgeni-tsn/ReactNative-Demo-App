import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const {textStyle, viewStyle} = styles
  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
}

export {Header}
