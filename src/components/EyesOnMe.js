// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function printFocus() {
        console.log('Good!')
    }

    function printBlur() {
        console.log('Hey! Eyes on me!')
    }
   
    return (
            <button onFocus={printFocus} onBlur={printBlur}>Eyes on me</button>
    )
}
//button can be returned/renderd with out a div and multiple event listeners can be on as far as we know a button 
//intially you were correct next time try and fail as oppoesd to giving up 
//keep working on confidence
export default EyesOnMe;