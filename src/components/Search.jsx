import React from 'react'
import {useState} from "react"

function Search(props) {
    const[searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.filterFoods(event.target.value)
    }
     return (
    <div>
       <h5>Find</h5>
       <input type="text" name="search" value={searchInput} onChange={handleChange} />
    </div>
  )
}

export default Search