import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, FlatList, TouchableOpacity, SectionList } from "react-native";
import Header from '../Common/Header';
import { useNavigation } from '@react-navigation/native';

export default LineOptions = () => {
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
            list: [{ id: 1, title: 'Lab Dashboard' }, { id: 2, title: 'Test History' }, { id: 3, title: 'Seasoning' }, { id: 4, title: 'Extra Item 1' }, { id: 5, title: 'Extra Item 2' }, { id: 6, title: 'Lab Dashboard' }, { id: 7, title: 'Test History' }, { id: 8, title: 'Seasoning' }, { id: 9, title: 'Extra Item 1' }, { id: 10, title: 'Extra Item 2' }],
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
                            info.id === 3 ?
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('MoreLines', {
                                        screenName: 'MoreLines',
                                        listData: data
                                    })
                                }>
                                       <View style={[styles.tileBtn,{width:100,  justifyContent:'center', alignItems:'center'}]}>
                                            <Text style={styles.tileBtnText}>{'More...'}</Text>
                                        </View>
                                </TouchableOpacity>
                                :
                                info.id <= 3 ?
                                    
                                        <View style={[styles.tileBtn,{width:100,  justifyContent:'center', alignItems:'center'}]}>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.tileBtnText]}>{info.title}</Text>
                                    

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
                    key={'#'}
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
        fontWeight: 'bold',
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
