import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getproductdetail } from '../../Redux/Action/ProductAction';
import { useParams } from 'react-router-dom';
import { addItemToCart } from '../../Redux/Action/CartAction';


function ProductDetail() 
{
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(()=>
    {
       dispatch(getproductdetail(id))
    },[dispatch,id])
    const {productdetail,loading} = useSelector(state=>state.prodetail)
    // console.log(productdetail)
     
     const [quantity,setquantity] = useState(1)
     

     const increaseQty = ()=>
     {
        if(productdetail.stock<=quantity) return
        const qty = quantity+1;
        setquantity(qty)
         
     }

     const decreaseQty = ()=>
     {
       if(1>= quantity) return
       const qty = quantity-1;
       setquantity(qty)
     }

     const addToCart = ()=>
     {
       dispatch(addItemToCart(id,quantity))
     }


  return (

    <>
         {/* Breadcrumb Start */}
     <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/shop">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div> 
     {/* Breadcrumb End */}


    {/* Shop Detail Start */}
     <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src={productdetail?.image?.url} alt="Image1"/>
                        </div>
                        
                    </div>
                    <Link className="carousel-control-prev" to="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </Link>
                    <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </Link>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>{productdetail.product_name}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">{productdetail.numOfReviews}</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">Rs.{productdetail.price}</h3>
                    <p className="mb-4">{productdetail.description}</p>
                    
                        
                    
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: "130px"}}>
                            <div className="input-group-btn">
                                <button onClick = {decreaseQty} className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" value={quantity}/>
                            <div className="input-group-btn">
                                <button onClick = {increaseQty} className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <Link to = {`/cart`}>
                        <button className="btn btn-primary px-3" onClick={addToCart}><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button></Link>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                        <Link className="nav-item nav-link text-dark active" data-toggle="tab" to="#tab-pane-1">Description</Link>
                        <Link className="nav-item nav-link text-dark" data-toggle="tab" to="#tab-pane-2">Information</Link>
                        <Link className="nav-item nav-link text-dark" data-toggle="tab" to="#tab-pane-3">Reviews (0)</Link>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for Product Name</h4>
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image8" className="img-fluid mr-3 mt-1" style={{width:"45px"}}/>
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label >Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label >Your Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label >Your Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
     {/* Shop Detail End */}


    {/* Products Start */}
     {/* <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel related-carousel">
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  */}
    {/* Products End */}
    </>
  )
}

export default ProductDetail