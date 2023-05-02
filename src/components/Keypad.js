import React from 'react';
// Code Keypad Component Here

function Keypad (){
    function keypadSubmit(e) {
        e.preventDefault();
        console.log('Entering password...');
    }
    return (
        <form onChange={keypadSubmit}>
            <input type="password" name="password" placeholder="Enter password..."/>
        </form>
    )
}

export default Keypad;