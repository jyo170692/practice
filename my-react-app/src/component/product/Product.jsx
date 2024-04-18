import React from 'react'
import { Link } from 'react-router-dom';
function Product({pro}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className=" bg-light mb-4">
                <Link to={`/productdetail/${pro._id}`}>
                    <div className="product-img position-relative overflow-hidden">
                   
                        <img className="img-fluid w-100" src={pro.image.url} alt=""/>
                       
                
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    </Link>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to=''>{pro.product_name}</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>{pro.price}</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
  )
}

export default Product