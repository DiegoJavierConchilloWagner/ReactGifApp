import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Search']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <div>
            <h2 className="animate__animated animate__zoomIn">GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories }/>
            <h1>
                <div>
                    {
                        categories.map( category =>(
                            <GifGrid key={ category } category={ category }/>
                        ))
                    }
                </div>
            </h1>
        </div>
    )
}

