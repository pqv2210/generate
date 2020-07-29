/*
 * Copyright by vupq
 * git: https://github.com/pqv2210/generate
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface @{component}Props {}

export const @{component} = (props: @{component}Props) => {
  return (
    <View style={styles.container}>
      <Text>@{component}Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})