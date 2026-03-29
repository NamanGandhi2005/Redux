import React from 'react'
import { fetchPhotos } from '../api/mediaApi'
import { setActiveTabs } from '../redux/features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Tabs = () => {
    const dispatch=useDispatch()
    const tabs = ['photos', 'videos', 'GIF'];

    const activeTab = useSelector((state)=>state.search.activeTab)

    return (


        <div className='flex gap-10 p-10'>
            {tabs.map(function (elem, idx) {
                return  <button 
                    className={`${(activeTab==elem?'bg-blue-700':'bg-gray-600')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                    key={idx}
                    onClick={()=>{
                        dispatch(setActiveTabs(elem))
                    }}>
                    {elem}
                    
                </button>
                
            
            })}
        </div>
    )
}

export default Tabs