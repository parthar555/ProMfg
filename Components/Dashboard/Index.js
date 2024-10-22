import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    Platform,
    LayoutAnimation,
    SafeAreaView,
    ScrollView,
    FlatList,
  } from 'react-native';
  import React, { useState } from 'react';
  import { AntDesign } from '@expo/vector-icons';
import Header from '../Common/Header';
import HomeScreen from './HomeScreen';

const DATA = [
    { key: '1', value: 'FCP1'},
    { key: '2', value: 'FCC1' },
    { key: '3', value: 'PC1' },
    { key: '4', value: 'TC1' },
    { key: '5', value: 'TC2'},
    { key: '6', value: 'FCP1'},
    { key: '7', value: 'FCC1'},
    { key: '8', value: 'TC1'},
    { key: '9', value: 'TC2'},
    { key: '10', value: 'TC1' },
]
  
  const DashboardIndex = ({ navigation }) =>  {
    const [activeItem, setActiveItem] = useState('')
  
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  
    const toggleAccordion = (id) => {
      LayoutAnimation.configureNext({
        duration: 300,
        create: { type: 'easeIn', property: 'opacity' },
        update: { type: 'linear', springDamping: 0.3, duration: 250 },
      });
      if (id === activeItem) setActiveItem('')
      else setActiveItem(id);
    }

    const pickPanelToDisplay = (item) => {
        return (
            <View style={styles.container} key={item.key}>
                <TouchableWithoutFeedback onPress={() => toggleAccordion(item.key)}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.value}</Text>
                    <AntDesign name={activeItem && activeItem === item.key ? 'caretup' : 'caretdown'} size={16} />
                </View>
                </TouchableWithoutFeedback>
        
                {activeItem && activeItem === item.key &&
                    <HomeScreen></HomeScreen>
                }
            </View>
        )
    }
  
    return (
        <SafeAreaView>
            <Header navigation={navigation}></Header>
            <FlatList
                data={DATA}
                renderItem={({ item }) => pickPanelToDisplay(item)}
                keyExtractor={(item) => item.key}
            />
      </SafeAreaView>
    );
  }

  export default DashboardIndex;
  
  const styles = StyleSheet.create({
    details: {
      opacity: 0.65,
    },
    title: {
      textTransform: 'capitalize',
    },
    content: {
      marginTop: 8,
    },
    container: {
      margin: 10,
      padding: 15,
      backgroundColor: 'white',
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: 'black'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });