import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';

import { setQuery } from '../redux/features/searchSlice';
const SearchBar = () => {

const [text, setText] = useState('');

const dispatch=useDispatch();

const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(setQuery(text));
    setText('');
}
  return (
    <div>
        <form className='flex gap-5 bg-[var(--c1)] p-10' onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input
            required
            className='w-full border-2 px-4 py-2 text-xl rounded outline-none' 
            type="text" 
            placeholder='Search Anything'
            value={text}
            onChange={(e)=>{
                setText(e.target.value);
                
            }}
            />

            <button className='active:scale-95 rounded outline px-4 border-2' >Search</button>
        </form>
    </div>
  )
}

export default SearchBar