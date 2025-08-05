import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {
    const router = useRouter();
  return (

    <>
  
    <Stack.Screen options={{ headerShown: false }} />

    <View style={styles.body}>
        <View>
        <Text style={styles.logoFont}>أزكارلي</Text>
        <Text style={[styles.logoFont, { marginTop: 1 }]}>Azkaarly</Text>
        </View>


        <View style={{marginTop:80}}>
        <Pressable style={styles.Card}  onPress = {() => router.push('/morning')}>
          <Text style={styles.cardText}>أذكار الصباح</Text>
          <Text style={[styles.cardText, {fontSize:30}]}>Morning</Text>
        </Pressable>

        <Pressable style={[styles.Card, {marginTop:20, backgroundColor: '#B5CA9F'}]} onPress = {() => router.push('/evening')}>
          <Text style={[styles.cardText, {color: '#1F5635'}]}>أذكار المساء</Text>
          <Text style={[styles.cardText, {fontSize:30, color: '#1F5635'}]}>Evening</Text>
        </Pressable>
        </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fefae0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  logoFont: {
    textAlign: 'center',
    fontSize: 55,
    color: '#1F5534',
    fontWeight: 'bold',
  },
  Card:{
    backgroundColor:'#205635',
    width:280,
    height:150,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

  },
  cardText: {
      fontSize: 50,
      fontWeight: '600',
      color:'#fefae0'
  }
});
