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
    const initialCheckboxState = new Array(4).fill(null).map(() => new Array(15).fill(0));
    const [checkbox, setCheckbox] = useState(initialCheckboxState);
    const [searchData, setSearchData] = useState([{}]);
    const [exercises, setExercises] = useState(null);
    const [filterMuscle, setFilterMuscle] = useState(false);
    const [filterEquip, setFilterEquip] = useState(false);
    const [filterDif, setFilterDif] = useState(false);
    const [filterType, setFilterType] = useState(false);
    const filterchoices = [
     { name: "Difficulty", index: 0 },
     { name: "Equipment", index: 1},
     { name: "Muscles", index:  2},
     { name: "Type", index: 3}
    ];

    const difficultyoptions = [
      { name: "Beginner", index: 0},
      { name: "Intermediate", index: 1},
      { name: "Expert", index: 2}
    ];

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
      let flag = 0; //prob dont need
      const tempArray = checkbox;
      if(filterDif)
      {
        tempArray[0][index] = 1;
        setCheckbox(tempArray);
        console.log(tempArray);
      }
      if(filterMuscle)
      {
      
        console.log(tempArray);
    
      // Parse the selected index from the dropdown
    
      // Set the selected index to 1
        tempArray[2][index] = 1;
    
      // Update the checkBox state
        setCheckbox(tempArray);
      }
        generateResult();
      
    };

    const handleFilterboxChange = (event) => {
      setFilterDif(false);
      setFilterEquip(false);
      setFilterMuscle(false);
      setFilterType(false);
      if(event.target.value === "Difficulty")
      {
        setFilterDif(true);
        console.log("Dif");
      }
      else if(event.target.value === "Equipment")
      {
        setFilterEquip(true);
        console.log("Equpt");
      }
      else if(event.target.value === "Muscles")
      {
        setFilterMuscle(true);
        console.log("Muscles");
      }
      else if(event.target.value === "Type")
      {
        setFilterType(true);
        console.log("Type");
      }

     

    };

    const generateResult = () => {
      const tempArraytwo = [];
      if(exercises) 
      {
        tempArraytwo.current = filters.generateFilterSearch(exercises, checkbox);
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

            <div>
              <h2>Select Filter</h2>
              {<select onChange={handleFilterboxChange} className="filter-dropdown-menu">
                {filterchoices.map((choice) => (
                  <option
                    key={choice.index}
                  >
                    {choice.name}
                  </option>
                ))}
              </select>}
            </div>
            <br />
            <br />
            
            <div className = "Difficulty">
                  { filterDif && <select multiple className ="filter-dropdown-menu">
                  {difficultyoptions.map((option) => (
                    <option
                      key={option.index}
                      onClick={() => handleCheckboxChange(option.index)}
                    >
                    {option.name}
                    </option>
                    ))}
                  </select>
                  
                  }
            </div>
            
            <div className = "Equipment">

            </div>

            <div className = "Muscles">
            { filterMuscle && <select multiple className = "filter-dropdown-menu">
                {options.map((option) => (
                  <option
                    key={option.index}
                    onClick={() => handleCheckboxChange(option.index)}
                  >
                  {option.name}
                  </option>
                ))}
              </select> }
           </div>

           <div className = "Type">

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