import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Header from '../Common/Header';

export default Lines = ({ navigation }) => {
    const DATA = [
        { key: '1', value: 'FCP1' },
        { key: '2', value: 'FCC1' },
        { key: '3', value: 'PC1' },
        { key: '4', value: 'TC1' },
        { key: '5', value: 'TC2' },
        { key: '6', value: 'FCP1' },
        { key: '7', value: 'FCC1' },
        { key: '8', value: 'TC1' },
        { key: '9', value: 'TC2' },
        { key: '10', value: 'TC1' },
    ]


    const Item = ({ title }) => {
        return (

            <View style={styles.item}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('HomeScreen', {
                    screenName: 'Cards',
                  })
            }
        >
            <Item title={item.value} />
        </TouchableOpacity>
    );
    return (

        <SafeAreaView>
            <Header navigation={navigation}></Header>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 2,
    },
    item: {
        backgroundColor: '#DEE3F3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    }
});