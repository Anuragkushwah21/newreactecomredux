import React from "react";

function ProductDetail() {
  return (
    <>
      <div className="container-fluid ba pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-3">
            <div id="far" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img
                    className="w-100 h-100"
                    src="https://pnecommerce.netlify.app/img/product-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="w-100 h-100"
                    src="https://pnecommerce.netlify.app/img/product-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 h-100"
                    src="https://pnecommerce.netlify.app/img/product-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 h-100"
                    src="https://pnecommerce.netlify.app/img/product-4.jpg"
                    alt="Image"
                  />
                </div>
              </div>
              <a className="carousel-control-prev" to="#far" data-bs-slide="prev">
                <i className="fa fa-2x fa-angle-left text-dark"></i>
              </a>
              <a className="carousel-control-next" to="#far" data-bs-slide="next">
                <i className="fa fa-2x fa-angle-right text-dark"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7 mb-3 ">
            <div className="h-100 bg-light p-4 f">
              <h2>Product Name Goes Here</h2>
              <div className="d-flex mb-3">
                <small className="fa fa-star mr-1 b"></small>
                <small className="fa fa-star mr-1 b"></small>
                <small className="fa fa-star mr-1 b"></small>
                <small className="fa fa-star mr-1 b"></small>
                <small className="fa fa-star mr-1 b"></small>
                <small>(99 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
              <p className="mb-4">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem
                magna duo dolor no sea Nonumy
              </p>
              <div className="d-flex mb-3">
                <strong className="text-dark me-3">Sizes:</strong>
                <form className="d-flex">
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      XS
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      S
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      M
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      L
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      XL
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex mb-4">
                <strong className="text-dark me-3">Colour:</strong>
                <form className="d-flex">
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      Black
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      White
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      Red
                    </label>
                  </div>
                  <div className=" me-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      Blue
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" for="size-1">
                      Green
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex align-item-center mb-4 pt-2">
                <div className="input-group me-3 " style={{width: "130px;"}}>
                  <div className="input-group-btn">
                    <button className="btn y">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-white border-1 text-center"
                    value="1"
                  />
                  <div className="input-group-btn ">
                    <button className="btn y ">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button className="btn y px-3">
                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark me-2 ">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="y px-2 me-2" to="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="y px-2 me-2" to="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="y px-2 me-2" to="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="y px-2 me-2" to="">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5 ba">
        <h2 className=" ms-5">YOU MAY ALSO LIKE </h2>
        <div className="row px-xl-5 mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="mb-4">
              <div className="img12 w-100">
                <img src="image/f1.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4 bg-light">
                <a className="h6 text-decoration-none text-truncate" to="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-item-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-item-center justify-content-center mb-1">
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="mb-4">
              <div className="img12 w-100">
                <img src="image/f2.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4 bg-light">
                <a className="h6 text-decoration-none text-truncate" to="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-item-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-item-center justify-content-center mb-1">
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="mb-4">
              <div className="img12 w-100">
                <img src="image/f3.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4 bg-light">
                <a className="h6 text-decoration-none text-truncate" to="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-item-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-item-center justify-content-center mb-1">
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="mb-4">
              <div className="img12 w-100">
                <img src="image/f4.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4 bg-light">
                <a className="h6 text-decoration-none text-truncate" to="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-item-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-item-center justify-content-center mb-1">
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small className="fa fa-star mr-1 b"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
