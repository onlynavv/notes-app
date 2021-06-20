import React from 'react'

const SearchNote = ({setSearchTerm,searchTerm}) => {

    return (
        <div>
            <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </div>
    )
}

export default SearchNote
