import React from 'react'
import './index.css'

const SearchNote = ({setSearchTerm,searchTerm}) => {

    return (
        <div className='search-container'>
            <input type='text' value={searchTerm} placeholder='search notes' onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </div>
    )
}

export default SearchNote
