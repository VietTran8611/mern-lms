import React from 'react'
import { RadioInput } from './RadioInput'

export const Category = ({ setCategory, fetchFilteredCOurse, level,lang, user })  => {

    const handleChange = async (e) =>{
        setCategory(e.target.value)
        if(user){
          await fetchFilteredCOurse(e.target.value,level,user._id)
        }else{
          await fetchFilteredCOurse(e.target.value,level)
        }
    }
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>

    <div>
      <RadioInput
        handleChange={handleChange}
        value=""
        title="All"
        name="test"
      />
      <RadioInput
        handleChange={handleChange}
        value="mern"
        title="MERN"
        name="test"
      />
      <RadioInput
        handleChange={handleChange}
        value="Deep Learning"
        title="Deep Learning"
        name="test"
      />
      <RadioInput
        handleChange={handleChange}
        value="machineLearning"
        title="Machine Learning"
        name="test"
      />
      <RadioInput
        handleChange={handleChange}
        value="Computer Networking"
        title="Computer Networking"
        name="test"
      />
    <RadioInput
        handleChange={handleChange}
        value="web"
        title="web"
        name="test"
      />
    </div>
  </div>
  )
}
