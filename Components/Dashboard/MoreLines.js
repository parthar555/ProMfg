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

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id}>
      <View style={styles.tileSubject}>
        {
          <View style={styles.tilesOption}>
            <View style={styles.tileBtn}>
              <Text style={styles.tileBtnText}>{item.title}</Text>
            </View>

          </View>
        }
      </View>
    </TouchableOpacity>
  );

  const Item = ({ data }) => (
    <View style={styles.container} key={data.id}>
      <View style={styles.tileContent}>
        <Text style={styles.tileHeader}>{data.title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {
          data.subItems &&
          <FlatList
            key={'*'}
            data={data.subItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={3}
          />
        }

      </View>

    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header screenName={'cards'}></Header>
      <FlatList
        key={'#'}
        data={route.params.listData.list}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  details: {
    opacity: 0.65,
  },
  title: {
    fontSize: 18
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
  tiles: {
    borderWidth: 0.5,
    borderColor: '#AFCFF3',
    height: 95,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#F6F9FE',
    padding: 20,
  },
  tileHeader: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  }, toggle: {
    width: 100,
    height: 30,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  toggleText: {
    color: "#fff"
  }
  , tileSubject: {
    marginTop: 10,

  },
  tilesOption: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  tileBtn: {
    backgroundColor: '#DEE3F3',
    alignContent: 'space-between',
    padding: 5,
    borderRadius: 15,
    marginRight: 7,
    width: 110,
    alignItems: 'center'
  },
  tileBtnText: {
    fontSize: 10,
    fontWeight: 'bold'
  },
});