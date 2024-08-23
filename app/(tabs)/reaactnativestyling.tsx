import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

const reaactnativestyling = () => {
  const [color, setColor] = useState('yellow')
  const [platfromInfo, setPlatfromInfo] = useState('')

  const showPlatform = () => {
    setPlatfromInfo(`You are currently running this app on an ${Platform.OS}`)
  }
  
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue' }}>Hello Styling</Text>
      <Text style={styles.inBuiltStyling}>Hello In built Styling</Text>
      <Text style={{ color: color }}>Hello conditional styling</Text>
      <View>
        <Text>Hello Flexbox Box 1</Text>
        <Text>Hello Flexbox Box 2</Text>
        <Text>Hello Flexbox Box 3</Text>
      </View>
      <View style={styles.platformCode}>
        <Text style={styles.platformText}>{platfromInfo}</Text>
      </View>
      <Button
        title="Change Conditional Styling text"
        onPress={() => {
          const changedColor = color === 'yellow' ? 'green' : 'purple'
          setColor(changedColor)
        }}
      />
      <Button 
      title="Show running Platfrom"
      onPress={showPlatform}
      />
    </View>
  )
}

export default reaactnativestyling

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20
  },
  inBuiltStyling: {
    color: 'red',
  },
  platformCode: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    ...Platform.select({
      ios: {
        backgroundColor: 'Orange',
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        backgroundColor: 'pink'
      }
    }),
  },
  platformText : {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
})