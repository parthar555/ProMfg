import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Common/Header';
import Cards from './Components/Dashboard/Cards';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
}
