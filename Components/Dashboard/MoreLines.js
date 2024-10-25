import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    Platform,
    LayoutAnimation,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity
  } from 'react-native';
  import Header from '../Common/Header';
import { useState } from 'react';
import LineOptions from './LineOptions';

export default MoreLines = ({ route }) => {
    const [activeItem, setActiveItem] = useState('')
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
          <View style={styles.container} key={item.id}>
            <TouchableWithoutFeedback onPress={() => toggleAccordion(item.id)}>
              <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )
      }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header screenName={'cards'}></Header>
            <FlatList
                data={route.params.listData.list}
                renderItem={({ item }) => pickPanelToDisplay(item)}
                keyExtractor={(item) => item.key}
            />
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    details: {
        opacity: 0.65,
      },
      title: {
        fontSize:18
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
        borderColor: '#AFCFF3'
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      logo: {
        height: 25,
        width: 25,
    },

});