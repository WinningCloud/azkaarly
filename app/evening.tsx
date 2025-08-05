import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import duas from '../assets/azkaar/evening.json';

export default function EveningScreen() {
  return (

    <>
        <Stack.Screen options={{ headerShown: false }} />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Evening Azkaar</Text>

      {duas.map((dua, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.countBadge}>{dua.count}x</Text>
          <Text style={styles.arabic}>{dua.arabic}</Text>
          <Text style={styles.translation}>{dua.translation}</Text>
        </View>
      ))}
    </ScrollView>
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop:90,
    backgroundColor: '#fefae0',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: '#1F5534',
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#205635',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    position: 'relative',
  },
  countBadge: {
  
    top: 10,
    right: 10,
    backgroundColor: '#1F5534',
    color: '#fefae0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  arabic: {
    fontSize: 34,
    textAlign: 'right',
    color: '#ffffff',
    marginBottom: 10,
    lineHeight: 36,
  },
  translation: {
    fontSize: 16,
    color: '#d9e4dd',
    textAlign: 'left',
    lineHeight: 24,
  },
});
