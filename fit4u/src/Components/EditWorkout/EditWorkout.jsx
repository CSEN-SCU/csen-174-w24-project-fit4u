import React, { useState, useEffect } from 'react';
import EditExerciseItem from './EditExerciseItem';
import calls from '../../Hooks/calls';
import { useParams, useNavigate } from 'react-router';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditWorkout = ({ setExercisePopup, workout, externalExercises, setMode }) => {
    const [title, setTitle] = useState(workout.name);
    const [getData, setGetData] = useState(false);
    const [dataExercises, setDataExercises] = useState([]);
    const [submitReady, setSubmitReady] = useState(false);
    const [response, setResponse] = useState(0);

    const datetime = new Date(Date.now());

    const { id } = useParams();

    const getDataStatus = () => {
        return getData;
    };

    const navigate = useNavigate();

    const data = {
        workout: {
            name: `${title}`,
            datetime: `${datetime.toISOString()}`,
            exercises: dataExercises,
        },
    };

    function handleSubmit() {
        setGetData(true);

        setTimeout(() => {
            setGetData(false);
        }, 5000);
    }

    useEffect(() => {
        const genExercises = () => {
            console.log(dataExercises);
            if (dataExercises.length !== 0) {
                setSubmitReady(true);
            }
        };

        genExercises();
    }, [dataExercises]);

    useEffect(() => {
        const submitData = () => {
            try {
                console.log(submitReady);
                if (submitReady) {
                    console.log(data);

                    //CHANGE TO UPDATE WORKOUT CALL
                    console.log(workout.id);
                    calls.updateWorkout(workout.id, data, setResponse);
                }
            } catch (error) {
                console.log(error);
            }
        };

        submitData();
    }, [submitReady]);

    const generateExerciseItems = () => {
        return workout.exercises.map((exercise) => (
            <EditExerciseItem
                exercise={exercise}
                getDataStatus={getDataStatus}
                dataExercises={dataExercises}
                setDataExercises={setDataExercises}
                key={exercise.id}
                exercises={externalExercises}
            />
        ));
    };

    return (
        <View>
            <View style={styles.logWorkoutWrapper}>
                <View style={styles.workoutTitleWrapper}>
                    <TextInput
                        style={styles.workoutInputs}
                        placeholder={title}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                </View>
                <View style={styles.workoutButtons}>
                    <Button title="Add Exercise" onPress={() => setExercisePopup(true)} />
                    <Button title="Save" onPress={() => handleSubmit()} />
                </View>
                <View style={styles.exerciseItems}>{generateExerciseItems()}</View>
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

export default EditWorkout;
