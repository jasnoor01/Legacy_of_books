import React from 'react'

export default function ProductGrid() {
    return (
        <div className="container-fluid">
            {/* <h3 className="h3">shopping Demo-3 </h3> */}
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6 my-3">
                    <div className="product-grid3">
                        <div className="product-image3">
                            <a href="#">
                                <img className="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png" />
                                <img className="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" />
                            </a>
                            <ul className="social">
                                <li><a href="#" data-tip="View More"><i className="fa-solid fa-eye"></i></a></li>
                                <li><a href="#" data-tip="Add to Cartt"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            {/* <span className="product-new-label">New</span> */}
                        </div>
                        <div className="product-content ">
                            <h3 className="title"><a href="#">Men's Blazer</a></h3>
                            <div className="price">
                                Rs 63.50 /-
                                <span>Rs 75.00/-</span>
                            </div>
                            <ul className="rating ">
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star disable"></li>
                                <li className="fa fa-star disable"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}
