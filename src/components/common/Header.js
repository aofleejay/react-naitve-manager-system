import React from 'react'
import { Text, View } from 'react-native'

const Header = props => (
  <View style={styles.containers}>
    <Text>{props.headerText}</Text>
  </View>
)

const styles = {
  containers: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
}

export { Header }
