import React from 'react'
import { View } from 'react-native'

const Card = props => (
  <View style={styles.container}>
    {props.children}
  </View>
)

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
}

export { Card }
