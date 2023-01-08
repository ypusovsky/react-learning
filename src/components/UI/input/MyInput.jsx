import inputStyles from './MyInput.module.css';
import React from 'react';

const MyInput = (props) => {
    return ( 
        <input type="text" {...props} className={inputStyles.myInput}/>
     );
}

export default MyInput;