import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Header from '../Common/Header';

export default MoreLines = ({ route }) => {
    const Item = ({ title }) => {
        return (
            <View style={styles.tileSubject}>
            {
                <View style={styles.tilesOption}>
                    <View style={styles.tileBtn}>
                        <Text style={styles.tileBtnText}>{title}</Text>
                    </View>

                </View>
            }
        </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Item title={item.title} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header screenName={'cards'} ></Header>

            <View style={styles.tiles}>
                <View style={styles.tileContent}>
                    <Text style={styles.tileHeader}>{route.params.listData.title}</Text>
                </View>
                <FlatList
                    key={'#'}
                    data={route.params.listData.list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={3}
                />
            </View>


        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#AFCFF3'
    },
    titleStyle: {
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#AFCFF3'
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
        margin: 20,
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
        width:100,
        alignItems:'center'

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

});