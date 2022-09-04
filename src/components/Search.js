import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({ handleSearchNote }) {
  return (
    <div 
    className='search'>
        <MdSearch 
        className='search-icons' 
        size='1.4em' />
        <input 
        onChange={(e)=>
        handleSearchNote(e.target.value)
        } 
        type='text' 
        placeholder='Search...' />
    </div>
  )
}
