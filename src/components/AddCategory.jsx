import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('')
        }

        
    }

    return (
        <form onSubmit={handleInputSubmit} >
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