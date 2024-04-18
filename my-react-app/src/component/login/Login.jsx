import  { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { clearError,login } from '../../Redux/Action/LoginAction'

import { useAlert } from 'react-alert'
function Login() {
    const dispatch =  useDispatch()
    const navigate = useNavigate()
    const alert =  useAlert()
    const {isAuthenticated,error,loading} = useSelector((state)=>state.auth)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const submitLogin=(e)=>
    {
        e.preventDefault()
        
        dispatch(login(email,password))
        // console.log(email,password)
    }

    useEffect(()=>
    {
          if(error)
          {
             alert.error(error)
             dispatch(clearError())
          }
          if(isAuthenticated)
          {
            navigate('/')
            
          }
          
    },[navigate,error,alert,dispatch,isAuthenticated])

  return (
   <>
     {/* Breadcrumb Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <span className="breadcrumb-item active">Contact</span>
                </nav>
            </div>
        </div>
    </div>
    {/* Breadcrumb End */}


    {/* Contact Start */}
    <div className="container">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center"><span className="bg-secondary pr-3">Login</span></h2>
        <div className="row px-xl-5 d-flex align-item-center justify-content-center">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    {/* <div id="success"></div> */}
                    <form onSubmit={submitLogin} method="post">
                        <div className="control-group">
                            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"  placeholder="Your Email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"  placeholder="Your password"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        
                        
                        <div>
                          <div className='d-flex jusitfy-content-center align-item-center'>
                          <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                               Login</button>
                               <Link to='/registration' className='mx-5'>Not have a Account.Plz Click Here</Link>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    {/* Contact End */}


    
  
   </>
  )
}

export default Login