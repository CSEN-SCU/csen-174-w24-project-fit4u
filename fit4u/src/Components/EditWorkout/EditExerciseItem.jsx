import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import EditSetItem from './EditSetItem';
import Difficulty from '../Difficulty';
import filters from '../../Hooks/sanitizeData';
import calls from '../../Hooks/calls';

const EditExerciseItem = ({ exercise, getDataStatus, dataExercises, setDataExercises, exercises }) => {
    const [sets, setSets] = useState(exercise ? exercise.sets.length : 0);
    const [dataSets, setDataSets] = useState([]);
    const [unit, setUnit] = useState(exercise.unit);
    const [convertedExercise, setConvertedExercise] = useState(filters.convertSearchResult(exercise.externalExercise, exercises));

    const getUnits = () => {
        return unit;
    };

    useEffect(() => {
        const genExercise = async () => {
            const newExercise = filters.convertEditExercise(exercise, exercise.name, getUnits(), dataSets);
            if (newExercise !== null) {
                const result = await setDataExercises(dataExercises => [...dataExercises, newExercise]);
            }
        };

        if (getDataStatus()) {
            genExercise();
        }
    }, [dataSets]);

    const volume = () => {
        if (unit === 'lbs' || unit === 'kg') {
            return <Text>VOL</Text>;
        } else if (unit === 'tm') {
            return <Text>TIME</Text>;
        } else {
            return <></>;
        }
    };

    const generatesetItems = () => {
        let items = exercise.sets.map((set, i) => 
            <EditSetItem set={set} setNum={i + 1} dataSets={dataSets} setDataSets={setDataSets} getDataStatus={getDataStatus} key={i} getUnits={getUnits} />
        );
        return items;
    };

    const generateDisplay = () => {
        if (exercise && convertedExercise) {
            return (
                <>
                    <View style={styles.exerciseName}>
                        <Text>{exercise.name}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.exerciseInfo}>
                            <Text>Muscle: {convertedExercise.muscle}</Text>
                            <Text style={styles.difficultyWrapper}>Difficulty: <Difficulty rating={convertedExercise.difficulty} /></Text>
                            <Text>Equipment: {convertedExercise.equipment}</Text>
                            <select onChange={(e) => setUnit(e.target.value)}>
                                <option value="lbs">LB</option>
                                <option value="kg">KG</option>
                                <option value="bw" selected={unit === 'bw' ? "selected" : ""} >Body Weight</option>
                                <option value="tm">Timed</option>
                            </select>
                        </View>
                        <View style={styles.setInfo}>
                            <View style={styles.header}>
                                <Text>REPS</Text>
                                {volume()}
                            </View>
                            <View style={unit !== "tm" ? styles.setsItems : styles.setsItemsTimed}>
                                {generatesetItems()}
                                <Button
                                    title="+  ADD SET"
                                    onPress={() => {
                                        setSets(sets + 1);
                                        exercise.sets.push({
                                            'rating': '',
                                            'reps': '0',
                                            'volume': '0',
                                            'setNum': {sets}
                                        });
                                    }}
                                    style={styles.setItemsButton}
                                />
                            </View>
                        </View>
                    </View>
                </>
            );
        } else {
            return <Text>Loading...</Text>;
        }
    };

    return (
        <SafeAreaView style={styles.exerciseItemWrapper}>
            {generateDisplay()}
        </SafeAreaView>
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

export default EditExerciseItem;
