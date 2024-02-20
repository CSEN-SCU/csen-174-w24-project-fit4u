import React from 'react'
import {StarIcon} from '@heroicons/react/24/solid'

const Difficulty = ({rating}) => {

  if(rating === 'beginner'){
    return <span className='difficulty'><StarIcon height={24} color={'#22DD22'}/></span>
  }else if(rating === "intermediate"){
    return  <span className='difficulty'><StarIcon height={24} color={'#FFFF22'} /><StarIcon height={24} color={'#FFFF22'}/></span>
  }else if(rating === "expert"){
    return <span className='difficulty'><StarIcon height={24} color={'#FF0000'} /><StarIcon height={24} color={'#FF0000'}/><StarIcon height={24} color={'#FF0000'}/></span>
  }else{
    return <></>
  }

}

export default Difficulty
