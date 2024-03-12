import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import ExerciseItem from '../Components/ExerciseItem';
import { useNavigation } from '@react-navigation/native';
import { createWorkout } from '../api/calls';

export default function LogWorkout({ onAdd, setExercisePopup, workoutExercises, passedTitle, deleteExercise }) {
    const [title, setTitle] = useState(passedTitle ? passedTitle : '');
    const [getData, setGetData] = useState(false);
    const [dataExercises, setDataExercises] = useState([]);
    const [submitReady, setSubmitReady] = useState(false);
    const [response, setResponse] = useState(0);

    const datetime = new Date();

    const navigation = useNavigation();

    const getDataStatus = () => getData;

    const data = {
        workout: {
            name: title,
            datetime: datetime.toISOString(),
            exercises: dataExercises
        }
    };

    function handleSubmit() {
        setGetData(true);

        setTimeout(() => {
            setGetData(false);
        }, 5000);
    }

    useEffect(() => {
        const genExercises = () => {
            if (dataExercises.length !== 0) {
                setSubmitReady(true);
            }
        };

        genExercises();
    }, [dataExercises]);

    useEffect(() => {
        const submitData = () => {
            try {
                if (submitReady) {
                    console.log(data);
                    createWorkout(data, setResponse);
                    navigation.navigate('/app/workouts');
                }
            } catch (error) {
                console.log(error);
            }
        };

        submitData();
    }, [submitReady]);

    const generateExerciseItems = () => {
        return workoutExercises.map(exercise => (
            <ExerciseItem
                key={exercise.id}
                exercise={exercise}
                getDataStatus={getDataStatus}
                dataExercises={dataExercises}
                setDataExercises={setDataExercises}
                deleteExercise={deleteExercise}
            />
        ));
    };

    return (
        <View style={styles.logWorkoutWrapper}>
            <View style={styles.workoutTitleWrapper}>
                <TextInput
                    style={styles.workoutInputs}
                    placeholder="Workout Title"
                    value={title}
                    onChangeText={setTitle}
                />
            </View>
            <View style={styles.workoutButtons}>
                <Button title="Add Exercise" onPress={() => setExercisePopup(true)} />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
            <ScrollView style={styles.exerciseItems}>
                {generateExerciseItems()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    logWorkoutWrapper: {
        flex: 1,
        paddingTop: '14%',
    },
    workoutTitleWrapper: {
        alignItems: 'center',
    },
    workoutInputs: {
        width: '50%',
        height: 40,
        backgroundColor: '#D9D9D9',
    },
    workoutButtons: {
        flexDirection: 'column',
        marginHorizontal: '5%',
        marginVertical: '2%',
    },
    exerciseItems: {
        flex: 1,
        padding: '5%',
    },
});
