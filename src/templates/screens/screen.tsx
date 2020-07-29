/*
 * Copyright by vupq
 * git: https://github.com/pqv2210/generate
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface @{screen}ScreenProps {}

export const @{screen}Screen: React.FunctionComponent<@{screen}ScreenProps> = (props: @{screen}ScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>@{screen}Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})