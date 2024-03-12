import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = ({ getMenu }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('/app/workouts')}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>WORKOUTS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('/app/workout-plans')}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>WORKOUT PLANS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('/app/analyze')}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>ANALYZE</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('/settings')}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>SETTINGS</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    menuWrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#B82A25',
        width: '100%',
        height: '90%',
        alignItems: 'center',
    },
    menuItem: {
        width: 180,
        height: 80,
        backgroundColor: '#853835',
        marginTop: '7%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemText: {
        color: '#FFF',
        fontFamily: 'Koulen',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
});
