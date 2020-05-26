import React from 'react';
import classes from './Spinner.module.css';



const spinner = () => {
    return (
        
        <div className={classes.Loader}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default spinner ;