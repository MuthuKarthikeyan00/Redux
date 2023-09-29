import React,{useState} from 'react'
import "./home.css";
import {useDispatch} from 'react-redux';
import {user} from '../Store/action/action';


const Home = (props) => {

  const dispatch=useDispatch();
  const [userInput, setuserInput] = useState(
    {
      name:'',phone:"",email:"",textarea:'',
    }
  );

  const ValueChange =(event)=>{
        const {name,value} =event.target;
        setuserInput((preState)=>{
          return {
            ...preState,[name]:value,
          }
        })
  }

  console.log(userInput);
  const handleClk =(event)=>{
      event.preventDefault();
      dispatch(user(userInput));
  }

    return (
    <div className="login__container">
       
     <form>
       <label>Name:</label><br></br>
       <input name="name" type='text' onChange={ValueChange} placeholder="Name"></input><br></br>
       <label>Phone:</label><br></br>
       <input name="phone" type='text' onChange={ValueChange} placeholder="Phone"></input><br></br>
       <label>Email:</label><br></br>
       <input name="email" onChange={ValueChange} type='email' placeholder="Email"></input><br></br>
       <label>Type more:</label><br></br>
       <textarea name="textarea" onChange={ValueChange} type='text' placeholder="Type more:"></textarea><br></br>
       <button type="submit" onClick={handleClk}>submit</button><br></br>
     </form>

    </div>
    )
}

export default Home;
