import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit', inputValue);

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('')
        }

        
    }

    return (
        <form onSubmit={handleInputSubmit} >
            <p> { inputValue }</p>
            <input  
                type="text" 
                value={inputValue} 
                placeholder="Buscar meme..."
                onChange={ handleInputChange } 
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}