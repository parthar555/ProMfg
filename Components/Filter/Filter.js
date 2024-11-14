import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from "../../utils/utils";

export default Filter = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    
    const showMode = (modeToShow) => {
        setMode(modeToShow);
        setShow(true);
    }
    const onChange = ({type}, selectedDate) => {
        if (type === 'set') {
            const currentDate = selectedDate;
            setDate(currentDate)
            setShowPicker(!showPicker)
        } else {
            showMode()
        }
    }
    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }

    return (
        <View style={{position: 'relative', width: 500}}>
            
            <TextInput
                style={styles.dateInputText}
                placeholder="Select"
                value={formatDate(date)}
                onPressIn={toggleDatePicker}
            />
            {showPicker && <View ><DateTimePicker
                value={date}
                is24Hour={true}
                mode={'date'}
                onChange={onChange}
                display="spinner"
                style={styles.datePicker}
            /></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    datePicker: {
        height: 120,
        fontSize: 18,
        zIndex: 10,
        width: 250
        
    },
    textStyle: {
        fontSize: 18
    },
    dateInputText:{
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#AFCFF3',
        width: 120,
        zIndex: 0
    }
})
