import  { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { register,clearError } from '../../Redux/Action/RegisterAction'
import {useAlert} from 'react-alert'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const [name,setName] = useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()
    const [mobile,setMobile]=useState()
    const [image,setImage] =useState()
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate=useNavigate()
    const {isAuthenticated,error,loading}=useSelector(state=>state.auth)
    const submitHandler = (e)=>
    {
        e.preventDefault()
        const formData = new FormData()
           formData.append('name',name)
           formData.append('email',email)
           formData.append('password',password)
           formData.append('cpassword',cpassword)
           formData.append('mobile',mobile)
           formData.append('image',image)
           dispatch(register(formData))
        //    console.log(name,email,password,cpassword,mobile,image)
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
              navigate('/login')
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
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center"><span className="bg-secondary pr-3">Sign Up</span></h2>
        <div className="row px-xl-5 d-flex align-item-center justify-content-center">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    {/* <div id="success"></div> */}
                    <form onSubmit={submitHandler} method="post">
                    <div className="control-group">
                            <input type="text" name='name'  onChange={(e)=>setName(e.target.value)} className="form-control"  placeholder="Your Name"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} className="form-control"  placeholder="Your Email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} className="form-control"  placeholder="Your password"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="password" name='cpassword' onChange={(e)=>setCpassword(e.target.value)} className="form-control"  placeholder="Your confirm_password"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" name='mobile' onChange={(e)=>setMobile(e.target.value)} className="form-control"  placeholder="Your Mobile_number"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="file" name='image' onChange={(e)=>setImage(e.target.files[0])} className="form-control"  placeholder="Select your image"/>
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
    {/* Contact End */}


    
  
   </>

  )
}

export default Registration