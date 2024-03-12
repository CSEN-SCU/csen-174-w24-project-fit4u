import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedSetItem = ({ set }) => {
    return (
        <View style={styles.setWrapper}>
            <Text style={styles.setText}>SET {set.setNumber}</Text>
            <View style={styles.inputs}>
                <Text>{set.reps}</Text>
                <Text>{set.volume}</Text>
            </View>
        </View>
    );
};

export default SavedSetItem;

const styles = StyleSheet.create({
    setWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    setText: {
        marginRight: 10,
    },
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
