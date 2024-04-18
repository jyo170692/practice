
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Loading from './layout/Loading'
import MetaData from './layout/MetaData'

function Profile() {
  
    const {user,loading,idAuthenticated,error} = useSelector((state)=>state.auth)
     console.log(user)
     
  return (
    
    <>
            {loading ? <Loading/>:(
                <>
                <h1>hello</h1>
                    {/* breadcrumb starts */}
                    <MetaData title={"Profile"} />
                     <div className="container container-fluid">
                        <h2 className="mt-5 ml-5">My Profile</h2>
                        <div className="row justify-content-around mt-5 user-info">
                            <div className="col-12 col-md-3">
                                <figure className=''>
                                    <img className="rounded-circle img-fluid" src={user.image.url} alt=''/>
                                </figure>
                                <Link to="/updateProfile" id="edit_profile" className="btn btn-primary btn-block my-5">
                                    Edit Profile
                                </Link>
                            </div>

                            <div className="col-12 col-md-5">
                                <h4>Full Name</h4>
                                <p>{user.name}</p> 

                                 <h4>Email Address</h4>
                                <p>{user.email}</p>

                                <a href="/orders" className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </a>

                                <Link to="/changepassword" className="btn btn-primary btn-block mt-3">
                                    Change Password
                                </Link>
                            </div>
                        </div>
                    </div> 
                </>
            )}
        </>
  )
}

export default Profile
