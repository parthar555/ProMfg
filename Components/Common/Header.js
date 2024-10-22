import {
    View, Text, StyleSheet, Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
export default Header = ({ screenName }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>

                        <TouchableOpacity onPress={() =>
                            screenName == 'cards' ? navigation.goBack() : null
                        }>
                            <Image
                                style={styles.logo}
                                source={screenName == 'cards' ? require('../../assets/back-icon.png') : require('../../assets/mfg-image.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignContent: 'flex-end',
                        }}>
                        <TouchableOpacity >
                            <Image
                                style={styles.logo}
                                source={require('../../assets/notification-icon-1.jpg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: '#FFDF00',
                                padding: 4,
                                marginLeft: 10,
                                borderRadius: 25,
                            }}>
                            <Text style={{ padding: 5, borderRadius: 10 }}>RR</Text>
                        </TouchableOpacity>


                    </View>
                </View>


            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {

        width: Dimensions.get('window').width,
        borderBottomWidth: 0.5,
        padding: 10,
        borderColor: 'gray',
    },
    headerText: {
        fontSize: 20,
        flex: 1,
        // borderWidth: 1,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    logo: {
        height: 25,
        width: 25,
    },
});
