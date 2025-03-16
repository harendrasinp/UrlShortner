import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deletThunk, fetchDataFromLocalStorage, setClose } from '../reducer/Urlreducer';
export const DeleteUrl = () => {

  const dispatch=useDispatch()
  const {isOpen,deleteItem}=useSelector((state)=>state.url);

  if(!isOpen) return null;

    const deleteurl=() => {
      dispatch(deletThunk(deleteItem))
      dispatch(fetchDataFromLocalStorage())
      dispatch(setClose())
    }


  return (
    <div className=' absolute w-full h-[18rem] flex justify-center items-center'>
      <div className='absolute w-[20rem] h-[8rem] bg-blue-950/60 backdrop-blur-md rounded-md flex justify-around items-center flex-col'>
        <h4 className='text-amber-50'>Are You Sure ? To Delete This Short Url</h4>
        <div className='flex justify-between w-1/2'>
          <button onClick={deleteurl} className='bg-cyan-700  px-[1.5rem] text-amber-50 rounded-md transition active:scale-110'>Yes</button>
          <button onClick={()=>dispatch(setClose())} className='bg-cyan-700 px-[1.5rem] text-amber-50 rounded-md transition active:scale-110'>No</button>
        </div>
      </div>
    </div>
  )
}
