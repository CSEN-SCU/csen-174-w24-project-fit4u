import {useState, useEffect, useRef} from 'react'
import calls from '../Hooks/calls'
import '../Styles/exercisepopup.css'
import filters from '../Hooks/sanitizeData'
import Select from 'react-select'
import { StarIcon } from '@heroicons/react/24/solid'
/*
Make a new pop up for filter search, it mirrors ExercisePopup but the searchData will take in only the filtered search. Also find a way for all the info to be displayed in the search bar. 
*/

/*
Im moving everything over I did in AddExercisePopup to this, with slight tweaks. 
*/
const FilterExercisePopup = ({setFilterPopup, setWorkoutExercises, workoutExercises, getMode, workout, setWorkout, setExercisePopup}) => {
    const [searchData, setSearchData] = useState([]);
    const [exercises, setExercises] = useState(null);
    const [diffObject, setDiffObject] = useState([]);
    const [equipObject, setEquiptObject] = useState([]);
    const [muscleObject, setMuscleObject] = useState([]);

    const difficultyoptions = [
      { name: "Beginner", index: 0},
      { name: "Intermediate", index: 1},
      { name: "Expert", index: 2}
    ];

    const equipoptions = [
      { name: "Dumbbell", index: 0 },
      { name: "Barbell", index: 1 },
      { name: "Machine", index: 2 },
      { name: "EZ Curl Bar", index: 3 },
      { name: "Bands", index: 4 },
      { name: "Cable", index: 5 },
      { name: "Kettlebells", index: 6 },
      { name: "Body Only", index: 7 },
      { name: "None", index: 8 },
      { name: "Other", index: 9 }
    ];

    const options = [ 
        { name: "Abdominals", index: 0 },
        { name: "Abductors", index: 1 },
        { name: "Adductors", index: 2 },
        { name: "Biceps", index: 3 },
        { name: "Calves", index: 4 },
        { name: "Chest", index: 5 },
        { name: "Forearms", index: 6 },
        { name: "Glutes", index: 7 },
        { name: "Hamstrings", index: 8 },
        { name: "Lats", index: 9 },
        { name: "Lower Back", index: 10 },
        { name: "Middle Back", index: 11 },
        { name: "Neck", index: 12 },
        { name: "Quadriceps", index: 13 },
        { name: "Traps", index: 14 },
        { name: "Triceps", index: 15 },
      ];


    useEffect(() => {   //This gets all the exercises for us 
        const getExercises = () => {
          calls.getExercises(setExercises)
        }
    
        getExercises()
    
    }, [])


    const handleCheckboxChange = () => { //only set for 1 per click rn 
     //prob dont need
    

      //The more difficulties you click, they are saved unto the object
      /*In Sanitize Data*/
      //3 Checks in the sanitize: Difficulty object. 
      //Run a loop 1 that traverses every exercise. If Difficulty is empty go to next loop else
      //Push everything exercise onto Array 1
      //Run a loop 2 that traverses through Array1. If Equipment is empty go to next loop else
      //Push everything that matches one or more of the equiptment ex: if exercise.equipment == value || value 1 onto last array
      //Run a loop 3 that traverses through last Array. If muscles is empty end. IF not
      //Push everything that is selected in muscles. 

      //Idea you create an object. 
      //Click Difficulty:  Difficulty Object: {}
      //Click Equipment:  Equipment Object: {}
      //Click Muscle:  Muscle Object: {}
      let tempObj =[];
      let updatedDiffObject = [...diffObject];
      let updatedEquipObject = [...equipObject];
      let updatedMuscleObject = [...muscleObject];
      /*----------Difficulty----------*/
      if(event.target.value === "Beginner" && !(diffObject.some(obj => obj.name === "beginner")))
        {
          tempObj = {name: "beginner"};
          console.log(tempObj);
          updatedDiffObject.push(tempObj);
        } 
        if(event.target.value === "Intermediate" && !(diffObject.some(obj => obj.name === "intermediate")))
        {
          tempObj = {name: "intermediate"};
          console.log(tempObj);
          updatedDiffObject.push(tempObj); 
        } 
        if(event.target.value === "Expert" && !(diffObject.some(obj => obj.name === "expert")))
        {
          tempObj = {name: "expert"};
          console.log(tempObj);
          updatedDiffObject.push(tempObj);  
        } 

        /*----------Equipment----------*/
        if(event.target.value === "Dumbbell" && !(equipObject.some(obj => obj.name === "dumbbell")))
        {
          tempObj = {name: "dumbbell"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Barbell" && !(equipObject.some(obj => obj.name === "barbell")))
        {
          tempObj = {name: "barbell"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Machine" && !(equipObject.some(obj => obj.name === "machine")))
        {
          tempObj = {name: "machine"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "EZ Curl Bar" && !(equipObject.some(obj => obj.name === "e-z_curl_bar")))
        {
          tempObj = {name: "e-z_curl_bar"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Bands" && !(equipObject.some(obj => obj.name === "bands")))
        {
          tempObj = {name: "bands"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Cable" && !(equipObject.some(obj => obj.name === "cable")))
        {
          tempObj = {name: "cable"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Kettlebells" && !(equipObject.some(obj => obj.name === "kettlebells")))
        {
          tempObj = {name: "kettlebells"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Body Only" && !(equipObject.some(obj => obj.name === "body_only")))
        {
          tempObj = {name: "body_only"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "None" && !(equipObject.some(obj => obj.name === "None")))
        {
          tempObj = {name: "None"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 
        if(event.target.value === "Other" && !(equipObject.some(obj => obj.name === "other")))
        {
          tempObj = {name: "other"};
          console.log(tempObj);
          updatedEquipObject.push(tempObj);
        } 


        /*----------Muscles----------*/
        if(event.target.value === "Abdominals" && !(muscleObject.some(obj => obj.name === "abdominals")))
        {
          tempObj = {name: "abdominals"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Abductors" && !(muscleObject.some(obj => obj.name === "abductors")))
        {
          tempObj = {name: "abductors"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Adductors" && !(muscleObject.some(obj => obj.name === "adductors")))
        {
          tempObj = {name: "adductors"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Biceps" && !(muscleObject.some(obj => obj.name === "biceps")))
        {
          tempObj = {name: "biceps"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Calves" && !(muscleObject.some(obj => obj.name === "calves")))
        {
          tempObj = {name: "calves"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Chest" && !(muscleObject.some(obj => obj.name === "chest")))
        {
          tempObj = {name: "chest"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Forearms" && !(muscleObject.some(obj => obj.name === "forearms")))
        {
          tempObj = {name: "forearms"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Glutes" && !(muscleObject.some(obj => obj.name === "glutes")))
        {
          tempObj = {name: "glutes"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Hamstrings" && !(muscleObject.some(obj => obj.name === "hamstrings")))
        {
          tempObj = {name: "hamstrings"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Lats" && !(muscleObject.some(obj => obj.name === "lats")))
        {
          tempObj = {name: "lats"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Lower Back" && !(muscleObject.some(obj => obj.name === "lower_back")))
        {
          tempObj = {name: "lower_back"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Middle Back" && !(muscleObject.some(obj => obj.name === "middle_back")))
        {
          tempObj = {name: "middle_back"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Neck" && !(muscleObject.some(obj => obj.name === "neck")))
        {
          tempObj = {name: "neck"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Quadriceps" && !(muscleObject.some(obj => obj.name === "quadriceps")))
        {
          tempObj = {name: "quadriceps"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Traps" && !(muscleObject.some(obj => obj.name === "traps")))
        {
          tempObj = {name: "traps"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        if(event.target.value === "Triceps" && !(muscleObject.some(obj => obj.name === "triceps")))
        {
          tempObj = {name: "triceps"};
          console.log(tempObj);
          updatedMuscleObject.push(tempObj);
        } 
        


        setDiffObject(updatedDiffObject);
        setEquiptObject(updatedEquipObject);
        setMuscleObject(updatedMuscleObject);

        generateResult(updatedDiffObject, updatedEquipObject, updatedMuscleObject);
      
    };

    

    const generateResult = (diffObject, equipObject, muscleObject) => {
      const tempArraytwo = [];
      if(exercises) 
      {
        tempArraytwo.current = filters.generateFilterSearch(exercises, diffObject, equipObject, muscleObject);
        setSearchData(tempArraytwo.current); 
        
      }  

    }
    
    const handleSelect = (record) => {
      if(getMode() === 'new'){
        setWorkoutExercises(workoutExercises => [...workoutExercises, filters.convertSearchResult(record.key, exercises)])
        setFilterPopup(false)
        setExercisePopup(false)
      }else if(getMode() === 'edit'){
        const temp = workout
        const converted =  filters.convertSearchResult(record.key, exercises)
        console.log('------Coneverted---------')
        console.log(converted)
        temp.exercises.push({
          'name': converted.name,
          'sets': [],
          'unit': 'lbs',
          'externalExercise': record.key
        })
        setWorkout(temp)
        console.log('---------ADD EX---------')
        console.log(workout)
        setFilterPopup(false)
        setExercisePopup(false)
      }
    }
    
    return (
    <div className='add-exercise-wrapper'>
        <form>
            <div className='popup-header'>
              <h2>Filter Search</h2>
              <button onClick={()=>setFilterPopup(false)}> X </button>
            </div>

            
            <div className = "filter-box">
              <div className ="filterdifficulty"> 
                <h2>Difficulty</h2>
                <select  multiple className ="filter-dropdown-menu">
                  {difficultyoptions.map((option) => (
                    <option
                      key={option.index}
                      onClick={() => handleCheckboxChange(1)}
                    >
                    {option.name}
                    </option>
                    ))}
                  </select>
                </div>

              <div className ="filterequip"> 
                <h2>Equipment</h2>
                <select multiple className ="filter-dropdown-menu">
                  {equipoptions.map((option) => (
                    <option
                      key={option.index}
                      onClick={() => handleCheckboxChange(2)}
                    >
                    {option.name}
                    </option>
                    ))}
                  </select>
                </div>

              <div className ="filtermuscle"> 
                  <h2>Muscles</h2>
                <select multiple className = "filter-dropdown-menu">
                {options.map((option) => (
                  <option
                    key={option.index}
                    onClick={() => handleCheckboxChange(3)}
                  >
                  {option.name}
                  </option>
                  ))}
                </select>
              </div>
           </div>

           <div>
           <Select
            placeholder="Filtered Search"
            autoFocus={true}
            defaultValue="Doe"
            options={searchData.length > 0 ? searchData : [{ value: 'no-options', label: 'No options available', isDisabled: true }]}
            onChange={
              
            (record) => {handleSelect(record) }
            
            }
            /> 
           </div>


          </form>
    </div>
    );
}



export default FilterExercisePopup