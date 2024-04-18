import { useState,useEffect } from 'react'
import { passwordChange,clearError } from '../Redux/Action/PofileAction'
import {  useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
function ChangePassword() {
    const[oldpassword,setOldpassword]=useState()
    const[newpassword,setNewPassword]=useState()
    const[cpassword,setCPassword]=useState()
   const dispatch=useDispatch()
   const navigate = useNavigate()
   const {user,isAuthentication,error} = useSelector((state)=>state.pros)
   const alert = useAlert()
    const submitHandle = (e)=>
    {
        e.preventDefault()
        const formData = new FormData()
           formData.append('oldpassword',oldpassword)
           formData.append('newpassword',newpassword)
           formData.append('cpassword',cpassword)
           
           dispatch(passwordChange(formData))
        //    console.log(oldpassword,newpassword,cpassword)
       
    }

    useEffect(()=>
    {
         if(error)
         {
                alert.error(error)
                dispatch(clearError())
         }
        if(isAuthentication)
         {
             navigate('/profile')
             
         }
     
    },[isAuthentication,dispatch,navigate,alert,error,submitHandle])

  return (
    <>
        <div className="container">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center"><span className="bg-secondary pr-3">Sign Up</span></h2>
        <div className="row px-xl-5 d-flex align-item-center justify-content-center">
            <div className="col-lg-7 mb-5">
                <div className=" bg-light p-30">
                    {/* <div id="success"></div> */}
                    <form onSubmit={submitHandle} method="post">
                    <div className="control-group">
                            <input type="password" name='oldpassword'   onChange={(e)=>setOldpassword(e.target.value)} className="form-control"  placeholder="OLD password" />
                            <p className=" text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="password" name='newpassword' onChange={(e)=>setNewPassword(e.target.value)} className="form-control"  placeholder="New Passwod" />
                            <p className="help-block text-danger"></p>
                        </div>

                        
                        <div className="control-group">
                            <input type="password" name='cpassword' onChange={(e)=>setCPassword(e.target.value)} className="form-control"  placeholder="Confirm_Password"/>
                            <p className="help-block text-danger"></p>
                        </div>
                       
                        <div>
                            <div className='d-flex justify-content-center'>
                        
                           <button className="btn btn-primary py-2 px-4 " type="submit" id="sendMessageButton">
                               submit</button>
                           
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ChangePassword
