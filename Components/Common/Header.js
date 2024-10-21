import { View, Text, StyleSheet, Dimensions } from "react-native";

export default Header = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome To MFG</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        borderBottomWidth: 0.5,
        padding: 20,
        borderColor: 'gray',
    },
    headerText: {
        fontSize: 20,
        flex:1,
        // borderWidth: 1,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    }
});
