
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../../Redux/Action/LoginAction'
function Header() {
    const {user,loading} = useSelector((state)=>state.auth)
    console.log(user)
    const dispatch = useDispatch()
    // const alert  = useAlert()
    function handleLogout()
    {
      dispatch(logout())
    //   alert.success("logout succesfully")
    }
  return (

    <>
    <div className="container-fluid ">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <Link className="text-body mr-3" to="">About</Link>
                    <Link className="text-body mr-3" to="">Contact</Link>
                    <Link className="text-body mr-3" to="">Help</Link>
                    <Link className="text-body mr-3" to="">FAQs</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown"></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/profile" className="dropdown-item" type="button">profile</Link>
                            <Link to="/" onClick={handleLogout}>Logout</Link>
                        </div>
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </div>
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <Link to="" className="btn px-0 ml-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                    </Link>
                    <Link to="" className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row align-items-center justify-content-center bg-light py-3   d-flex">
            <div className="col-lg-4">
                <Link to="" className="text-decoration-none">
                    {/* <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span> */}
                    <img src="" alt=""/>
                </Link>
            </div>
            <div className="col-lg-4 col-6">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
        <div className='row  bg-light  text-center' style={{}}>
        <div className="col-lg-4 col-6 " style={{}}>
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
    {/* topper End */}

     {/* Navbar Start */}
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#vertical" style={{height:"65px", padding:"0 30px"}}>
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="vertical" style={{width:"100%", zIndex: "999"}}>
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown dropright">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></Link>
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <Link to="" className="dropdown-item">Men Dresses</Link>
                                <Link to="" className="dropdown-item">Women Dresses</Link>
                                <Link to="" className="dropdown-item">Baby Dresses</Link>
                            </div>
                        </div>
                        <Link to="" className="nav-item nav-link">Shirts</Link>
                        <Link to="" className="nav-item nav-link">Jeans</Link>
                        <Link to="" className="nav-item nav-link">Swimwear</Link>
                        <Link to="" className="nav-item nav-link">Sleepwear</Link>
                        <Link to="" className="nav-item nav-link">Sportswear</Link>
                        <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                        <Link to="" className="nav-item nav-link">Blazers</Link>
                        <Link to="" className="nav-item nav-link">Jackets</Link>
                        <Link to="" className="nav-item nav-link">Shoes</Link>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link className='nav-item nav-link active' to='/'>Home</Link>
                            <Link className='nav-item nav-link' to='/shop'>Shop</Link>
                            <Link className='nav-item nav-link' to='/detail'>Shop Detail</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></Link>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <Link className='dropdown-item' to='/cart'>Shopping Cart</Link>
                                    <Link className='dropdown-item' to='/checkout'>Checkout</Link>
                                </div>
                            </div>
                            <Link className='nav-item nav-link' to='/contact'>Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <Link to="" className="btn px-0">
                                <i className="fas fa-heart text-primary"></i>
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px;"}}>0</span>
                            </Link>
                            <Link to="" className="btn px-0 ml-3">
                                <i className="fas fa-shopping-cart text-primary"></i>
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px;"}}>0</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/* Navbar End */}
    </>
  )
}

export default Header