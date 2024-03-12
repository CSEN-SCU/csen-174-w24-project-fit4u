import React, { useState, useEffect } from 'react';
import filters from '../../Hooks/sanitizeData';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EditSetItem = ({ set, setNum, getDataStatus, setDataSets, dataSets, getUnits }) => {
    const [reps, setReps] = useState(set.reps);
    const [vol, setVol] = useState(set.volume);
    const [rating, setRating] = useState(0);
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const genSet = async () => {
            let newSet;
            if (getUnits !== 'tm') {
                newSet = await filters.convertSet(reps, vol, setNum, rating);
            } else {
                newSet = await filters.convertSet(reps, convertTime(), setNum, rating);
            }
            if (newSet !== null) {
                console.log(`First Try`);
                setDataSets(dataSets => [...dataSets, newSet]);
            }
        };

        if (getDataStatus()) {
            genSet();
        }
    }, [getDataStatus()]);

    const convertTime = () => {
        return `${minutes}:${seconds}`;
    };

    const volume = () => {
        if (getUnits() === 'bw') {
            return <></>;
        } else if (getUnits() === 'tm') {
            return (
                <View style={styles.timedInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'min'}
                        keyboardType="numeric"
                        value={minutes}
                        onChangeText={(text) => setMinutes(text)}
                    />
                    <Text>:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'sec'}
                        keyboardType="numeric"
                        value={seconds}
                        onChangeText={(text) => setSeconds(text)}
                    />
                </View>
            );
        } else {
            return (
                <TextInput
                    style={styles.input}
                    placeholder={0}
                    keyboardType="numeric"
                    value={vol}
                    onChangeText={(text) => setVol(text)}
                />
            );
        }
    };

    return (
        <View style={getUnits() !== 'bw' ? styles.setWrapper : styles.setWrapperRepOnly}>
            <Text style={styles.setNum}>SET {setNum}</Text>
            <View style={getUnits() === 'bw' ? styles.repOnlyInputs : styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder={0}
                    keyboardType="numeric"
                    value={reps}
                    onChangeText={(text) => setReps(text)}
                />
                {volume()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseItemWrapper: {
        width: '90vw',
        backgroundColor: '#D9D9D9',
        position: 'relative',
        margin: '1rem 0rem',
    },
    exerciseName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 72,
    },
    exerciseNameHeart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnClear: {
        display: 'flex',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    heartIcon: {
        width: 28,
        height: 28,
        margin: '1rem',
    },
    exerciseInfo: {
        textAlign: 'left',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'center',
        margin: '0rem 1rem 0rem 0rem',
    },
    exerciseInfoSelect: {
        width: '70%',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2rem',
        justifyContent: 'space-between',
    },
    setInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60vw',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
    },
    setsItems: {
        width: '100%',
    },
    setsItemsTimed: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    setWrapperInputsInput: {
        width: '8vw',
        height: '4vh',
        margin: '0rem 1rem 0rem 1rem',
    },
    setItemsButton: {
        backgroundColor: '#853835',
        borderRadius: '0rem',
        width: '80%',
        margin: '.5rem',
        alignSelf: 'center',
    },
    setWrapperInputsP: {
        width: '10vw',
        height: '3.5vh',
        margin: '0rem 1rem 0rem 1rem',
        backgroundColor: '#853835',
        color: 'white',
        textAlign: 'center',
        verticalAlign: 'center',
    },
    setWrapperInputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    setWrapperH4: {
        width: '100%',
    },
    setWrapperButton: {
        backgroundColor: 'transparent',
        borderWidth: '0px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    difficultyWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timedInput: {
        display: 'flex',
        flexDirection: 'row',
        width: '20vw',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timedInputInput: {
        width: '30%',
        height: '4vh',
        alignSelf: 'center',
    },
    timedInputP: {
        padding: '.25rem',
    },
    repOnlyInputs: {
        width: '60vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    repOnlyInputsInput: {
        width: '16vw',
        height: '4vh',
    },
    exerciseOptions: {
        position: 'absolute',
        top: '4rem',
        backgroundColor: '#853835',
        zIndex: '4',
        padding: '1rem',
    },
    exerciseOptionsButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        letterSpacing: '.8px',
        fontWeight: '500',
        backgroundColor: 'black',
        width: '30vw',
        height: '8vh',
        margin: '.2rem 1rem',
        borderRadius: '0px',
        borderBottomWidth: '3px',
        borderColor: '#B82A25',
        alignSelf: 'center',
    },
});

export default EditSetItem;
