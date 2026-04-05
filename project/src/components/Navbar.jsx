import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='py-5 px-10 bg-[var(--c2)] flex justify-between items-center'>
                <h2 className='font-semibold text-2xl'>MediaSearch</h2>
                <div className='flex gap-5  items-center'>

                    <Link className='text-base font-medium active:scale-95 text-xl bg-[var(--c4)] text-[var(--c1)] rounded px-4 py-2' to='/'>Search</Link>
                    <Link className=' text-base font-medium active:scale-95 text-xl bg-[var(--c4)] text-[var(--c1)] rounded px-4 py-2' to='/collection'>Collection</Link>
                </div>
    </div>
  )
}

export default Navbar