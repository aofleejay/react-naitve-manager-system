import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.container}>
      <CardSection style={styles.card}>
        <Text style={styles.text}>
          {children}
        </Text>
      </CardSection>
      <CardSection>
      <Button onPress={onAccept}>Yes</Button>
      <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
)

const styles = {
  card: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 40,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
}

export { Confirm }