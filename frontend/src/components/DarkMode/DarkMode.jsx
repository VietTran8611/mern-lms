import React, { useState } from "react";
import { Sun,Moon  } from 'lucide-react';
import "./DarkMode.css";

export const DarkMode = () => {

    const [dark,setDark] = useState(false)
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme','light')
    }

    const toggleTheme = e =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
        setDark(!dark)
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <div>
                    <Sun className={dark && "white2"}/>
                </div>
                <div>
                    <Moon className={dark && "white"}/>
                </div>
            </label>
        </div>
    );
};


