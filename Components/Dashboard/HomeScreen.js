import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, TouchableOpacity, SectionList } from "react-native";
import Header from '../Common/Header';
import { useNavigation } from '@react-navigation/native';

export default HomeScreen = () => {
    const [selected, setSelected] = useState("");
    const navigation = useNavigation();

    const DATA = [
        {
            id: '1',
            title: 'PAE',
            list: [{ id: 1, title: 'PAE Dashboard' }, { id: 2, title: '+PAE FCP' }],
        },
        {
            id: '2',
            title: 'LAB',
            list: [{ id: 1, title: 'Lab Dashboard' }, { id: 2, title: 'Test History' }, { id: 3, title: 'Seasoning' }, { id: 4, title: 'More...' }, { id: 5, title: 'Extra Item' }],
        },
        {
            id: '3',
            title: 'Process Control',
            list: [{ id: 1, title: 'Test History' }, { id: 2, title: '    +All    ' }],
        },
    ];
    

    const Item = ({ data }) => (
        <View style={styles.tiles}>
            <View style={styles.tileContent}>
                <Text style={styles.tileHeader}>{data.title}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {data.list.map((info) => (
                    <View style={styles.tileSubject}>
                        {
                            info.id === 4 ?
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('Lines', {
                                        screenName: 'Lines',
                                    })
                                }>
                                    <View style={styles.tilesOption}>
                                        <View style={styles.tileBtn}>
                                            <Text style={styles.tileBtnText}>{'More...'}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                :
                                info.id <= 3 ?
                                    <View style={styles.tilesOption}>
                                        <View style={styles.tileBtn}>
                                            <Text style={styles.tileBtnText}>{info.title}</Text>
                                        </View>

                                    </View> : null
                        }
                    </View>



                ))
                }
            </View>





        </View>
    );



    return (
        <SafeAreaView>
            {/* <Header screenName={'cards'} ></Header> */}
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    headerText: {
        fontSize: 20,
        flex: 1,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
    },
    tiles: {
        borderWidth: 0.5,
        borderColor: 'black',
        height: 95,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#F6F9FE',
        padding: 20
    },
    tileHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    tileSubject: {
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
    },
    tileBtnText: {
        fontSize: 10,
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
      },toggle: {
        width: 100,
        height: 30,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
      },
      toggleText: {
        color: "#fff"
      }
});
