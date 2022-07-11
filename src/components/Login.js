import React from 'react'
import './Login.css'
 

function Login() {
  return (
    <div>
           <div className='a bg-image' >
          <img src='./assets/IMG_0534.png' className='img-fluid' alt='Sample' />
          {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}
          {/* </div> */}
          </div>

         <div className=' bg-image' >
          <img src='./assets/wepik-2022319-214333.png' className='b' alt='' />
          </div>

           <div>
           <div className="bg-image">
           <figure>
           <img src='./assets/wepik-2022319-214333-1.png' className='c'
            alt='' />
           
           <figcaption ><h1 className='fig'>Good things on <br/> your way!</h1></figcaption>
            </figure>
           </div>
           </div>


           <div className="data">
           <div >
          <img src='./assets/Artboard – 2.png' className='technoelevate' alt='' height="10px"  /> 
         </div>

           <h5 className='name' >Login</h5>
            


            <form>
        <div className="login">
          <label htmlFor="exampleInputEmail1" className="form-label">EmployeeID</label>
          <input type="text" className="form-control" id="EmployeeId" aria-describedby="emailHelp" />
        </div>
        <br/>
        <div className="login">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
        </div>
        <br/>
        <div >
          <button type="login" className="d" >Login </button>
          <button type="cancel" className="d1">Cancel</button> 
         </div>
        
            
         <div>
            <p className='sub'><pre>Copyright &copy;2018Alerico.com  Terms&condition|Privacy Policy</pre></p>
          </div>
    
         </form>
        </div>
        </div>
  )
}
      

export default Login;