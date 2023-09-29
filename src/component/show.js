import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {deleteuser} from '../Store/action/action'
const Show = () => {

const selectors =useSelector((state)=>{
       return state.data.userss;
})

const dispatch=useDispatch();

console.log(selectors);

  return (
    <div>
     {selectors.map((item,index)=>{
       return(
         <div key={index}>
           <h1>{item.name}</h1>
           <p>{item.phone}</p>
           <p>{item.email}</p>
           <p>{item.textatea}</p>
           <button onClick={(event)=>{
              dispatch(deleteuser(index))
           }}>delete</button>
           </div>
       );
     })}
    </div>
  )
}

export default Show;
