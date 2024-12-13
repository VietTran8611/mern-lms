import React from 'react'
import { RadioInput } from './RadioInput'


export const Language = ({setLang}) => {

    const handleChange = (e) =>{
        setLang(e.target.value)
    }
  return (
    <div>
    <h2 className="sidebar-title">Language</h2>

    <div>
      <RadioInput
        handleChange={handleChange}
        value="English"
        title="English"
        name="test3"
      />
    </div>
  </div>
  )
}
