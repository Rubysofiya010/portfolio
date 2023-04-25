import React from 'react'


export default function Login() {
  return (
    <div >
    <h1 className='title'><b>Login:</b></h1>

    <br></br>
    <form style={{textAlign:"center"}} >
     <b>Name:</b><input type='text'></input><br></br>
     <br></br>
     <b>Size:</b>{" "}{"  "}<input type='number'></input><br></br><br></br>
    <b>Date of order:</b>{" "}{" "}{" "}<input type='date'></input><br></br>  
    <br>
    </br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
     <b>Offers:</b>Yes<input type='radio' className='radioInput'></input> No<input className='inputRadio' type='radio'></input> <br></br><br></br>
     <button>SUBMIT</button>
    </form>
    </div>
  )
}