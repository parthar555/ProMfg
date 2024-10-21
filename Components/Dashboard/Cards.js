import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default Cards = () => {
    const [selected, setSelected] = useState("");
  
    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
        {key:'8', value:'Drinks'},
        {key:'9', value:'Drinks'},
        {key:'10', value:'Drinks'},
    ]

    return (
        <ScrollView style={styles.container}>
            <ScrollView>
                <SelectList 
                    data={data} 
                    save="value"
                    search={false}
                    selected={'1'}
                    setSelected={(val) => setSelected(val)} 
                />
                <View style={styles.tiles}>
                    <View style={styles.tileContent}>
                        <Text style={styles.tileHeader}>PAE</Text>
                    </View>
                    <View style={styles.tileSubject}>
                        <View style={styles.tilesOption}>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>PAE Dashboard</Text>
                            </View>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>+PAE FCP</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tiles}>
                    <View style={styles.tileContent}>
                        <Text style={styles.tileHeader}>LAB</Text>
                    </View>
                    <View style={styles.tileSubject}>
                        <View style={styles.tilesOption}>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>LAB Dashboard</Text>
                            </View>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>Test History</Text>
                            </View>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>Sessioning Dashboard</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tiles}>
                    <View style={styles.tileContent}>
                        <Text style={styles.tileHeader}>Process Control</Text>
                    </View>
                    <View style={styles.tileSubject}>
                        <View style={styles.tilesOption}>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>Test History</Text>
                            </View>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>+All</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tiles}>
                    <View style={styles.tileContent}>
                        <Text style={styles.tileHeader}>Week Link / Wall</Text>
                    </View>
                    <View style={styles.tileSubject}>
                        <View style={styles.tilesOption}>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>WL Dashboard</Text>
                            </View>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>WL Single Page</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tiles}>
                    <View style={styles.tileContent}>
                        <Text style={styles.tileHeader}>Week Link / Wall</Text>
                    </View>
                    <View style={styles.tileSubject}>
                        <View style={styles.tilesOption}>
                            <View style={styles.tileBtn}>
                                <Text style={styles.tileBtnText}>Thermal Preventive</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        padding: 20
    },
    headerText: {
        fontSize: 20,
        flex:1,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    },
    tiles: {
        borderWidth: 1,
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
    }
});
