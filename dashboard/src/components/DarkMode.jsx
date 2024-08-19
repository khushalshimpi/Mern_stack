import React from "react";



const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <img src="/Sun.svg" alt="sun" />
                <img src="/Moon.svg" alt="moon" />
            </label>
        </div>
    );
};

export default DarkMode;
