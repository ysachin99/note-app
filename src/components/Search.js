import React from 'react'
import SearchIcon from '../search.svg'

const Search = ({handleSearch}) => {
  return (
    <div>
         <img src={SearchIcon} width={30} />
        <input type='search' placeholder='Search note...' onChange={(event)=>handleSearch(event.target.value)} />
        
    </div>
  )
}

export default Search