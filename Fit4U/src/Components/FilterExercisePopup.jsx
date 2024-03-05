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
    const [checkbox, setCheckbox] = useState([new Array(15).fill(0)]);
    const [searchData, setSearchData] = useState([{}]);
    const [exercises, setExercises] = useState(null)
    const options = [ 
        { name: "Abdominals", index: 0 },
        { name: "Abductors", index: 1 },
        { name: "Biceps", index: 2 },
        { name: "Calves", index: 3 },
        { name: "Chest", index: 4 },
        { name: "Forearms", index: 5 },
        { name: "Glutes", index: 6 },
        { name: "Hamstrings", index: 7 },
        { name: "Lats", index: 8 },
        { name: "Lower Back", index: 9 },
        { name: "Middle Back", index: 10 },
        { name: "Neck", index: 11 },
        { name: "Quadriceps", index: 12 },
        { name: "Traps", index: 13 },
        { name: "Triceps", index: 14 },
      ];


    useEffect(() => {   //This gets all the exercises for us 
        const getExercises = () => {
          calls.getExercises(setExercises)
        }
    
        getExercises()
    
    }, [])


    const handleCheckboxChange = (index) => { //only set for 1 per click rn 
      const tempArray = checkbox;
    
      // Parse the selected index from the dropdown
    
      // Set the selected index to 1
      tempArray[0][index] = 1;
    
      // Update the checkBox state
      setCheckbox(tempArray);
      generateResult();
      
    };

    const generateResult = () => {
      const tempArraytwo = [];
      if(exercises) 
      {
        tempArraytwo.current = filters.generateFilterSearch(exercises, checkbox);
        setSearchData(tempArraytwo.current);
        console.log(searchData);
        
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

            <div>
              <h2>Select Muscles</h2>
            </div>
            <div>
              <select multiple className ="filter-dropdown-menu" >
                {options.map((option) => (
                  <option
                    key={option.index}
                    onClick={() => handleCheckboxChange(option.index)}
                  >
                  {option.name}
                  </option>
                ))}
              </select>
           </div>

           <div>
           <Select
            placeholder="Filtered Search"
            autoFocus={true}
            defaultValue="Doe"
            options={searchData} 
            onChange={
              
            (record) => {handleSelect(record) }
            
            }
            /> 
           </div>


          </form>
    </div>
    )

}

export default FilterExercisePopup


/*   const handleSelectChange = (event) => {
    const tempArray = Array(15).fill(0);
  
    // Parse the selected index from the dropdown
    const selectedIndex = event.target.value;
  
    // Set the selected index to 1
    tempArray[selectedIndex] = 1;
  
    // Update the checkBox state
    setCheckBox(tempArray);
    console.log(tempArray);
  };
  
  const handleSubmit = (data) => {
      console.log(data);
      /*if(exercises) {
        testSearchData.current = filters.generateFilterSearch(exercises, data); 
      }
  };
  */


      /*useEffect(() => {
      if(exercises){
        searchData.current = filters.generateFilterSearch(exercises, checkbox)
        console.log(searchData);
        console.log(checkbox)
      }
  
      
    }, [exercises])*/