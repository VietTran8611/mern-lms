import React from 'react'
import { RadioInput } from './RadioInput'


export const Level = ({setLevel, fetchFilteredCOurse, category,lang, user}) => {

    const handleChange = async (e) =>{
        setLevel(e.target.value)
        await fetchFilteredCOurse(category,e.target.value,user._id)
    }

  return (
    <div>
    <h2 className="sidebar-title">Level</h2>

    <div>
      <RadioInput
        handleChange={handleChange}
        value=""
        title="All"
        name="test2"
      />
      <RadioInput
        handleChange={handleChange}
        value="beginner"
        title="beginner"
        name="test2"
      />
      <RadioInput
        handleChange={handleChange}
        value="intermediate"
        title="intermediate"
        name="test2"
      />
      <RadioInput
        handleChange={handleChange}
        value="advance"
        title="advance"
        name="test2"
      />
    </div>
  </div>
  )
}
