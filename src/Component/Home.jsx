import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Product from "./Product/Product";
import Category from "./Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Actions/CategoryAction";
import Loadind from "./Layout/Loadind";

function Home() {
  const dispatch = useDispatch();
  console.log(dispatch);

  // const {Categories}= useSelector((state)=>state.cat)
  // console.log(Categories)

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <>
      {/* slider containder div start */}
      <div className="container-fluid pt-4 pb-5 ba">
        <div className="row px-xl-5">
          <div className="col-lg-8 mb-3">
            {/* <!--slider div start--> */}
            <div className="carousel slide" data-bs-ride="carousel" id="abc">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#abc"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#abc"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#abc"
                  data-bs-slide-to="2"
                ></button>
              </div>
              {/* <!--carousel-indicators div end--> */}

              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img
                    src="https://pnecommerce.netlify.app/img/carousel-1.jpg"
                    alt=""
                    className="w-100"
                  />

                  <div className="s">
                    <h2>MAN FASHION</h2>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src="https://pnecommerce.netlify.app/img/carousel-2.jpg"
                    alt=""
                    className="w-100"
                  />
                  <div className="s">
                    <h2>WOMAN FASHION</h2>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src="https://pnecommerce.netlify.app/img/carousel-3.jpg"
                    alt=""
                    className="w-100"
                  />

                  <div className="s">
                    <h2>KIDS FASHION</h2>
                  </div>
                </div>
              </div>
              {/* <!---carousel-inner div end--> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="g mb-4" style={{ height: "185px" }}>
              <img
                className="l w-100"
                src="https://pnecommerce.netlify.app/img/offer-1.jpg"
                alt=""
              />
              <div className="over12">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a to="" className="btn y">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="g" style={{ height: "185px" }}>
              <img
                className="l w-100"
                src="https://pnecommerce.netlify.app/img/offer-2.jpg"
                alt=""
              />
              <div className="over12">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a to="" className="btn y">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--slider containder div end-->

    <!--icon div start--> */}
      <div className="container-fluid pt-5 ba">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 pb-1">
            <div className="icon mb-4">
              <h1 className="fa fa-check m-0" style={{ color: "#00b0b5" }}></h1>
              <h5 style={{ marginLeft: "15px" }}>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 pb-1">
            <div className="icon mb-4">
              <h1
                className="fa fa-shipping-fast m-0"
                style={{ color: "#00b0b5" }}
              ></h1>
              <h5 style={{ marginLeft: "15px" }}>Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 pb-1">
            <div className="icon mb-4">
              <h1
                className="fa fa-exchange-alt m-0"
                style={{ color: "#00b0b5" }}
              ></h1>
              <h5 style={{ marginLeft: "15px" }}>14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 pb-1">
            <div className="icon mb-4">
              <h1
                className="fa fa-phone-volume m-0"
                style={{ color: "#00b0b5" }}
              ></h1>
              <h5 style={{ marginLeft: "15px" }}>24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!--icon div end-->

    <!--category div start--> */}
      <Category />
      {/* <!--category div end-->

    <!--product div start--> */}
      <Product />
      {/* <!--product div end-->

    <!--offer div start--> */}
      <div className="container-fluid pt-5 ba">
        <div className="row p-4 bg-light pt-4">
          <div className="col-md-6 pb-3">
            <div className="g" style={{ height: "325px" }}>
              <img
                src="https://pnecommerce.netlify.app/img/offer-1.jpg"
                alt=""
                className="l w-100"
              />
              <div className="over12">
                <h6 className="text-white">SAVE 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a to="" className="btn y">
                  {" "}
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="g" style={{ height: "325px" }}>
              <img
                src="https://pnecommerce.netlify.app/img/offer-2.jpg"
                alt=""
                className="l w-100"
              />
              <div className="over12">
                <h6 className="text-white">SAVE 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a to="" className="btn y">
                  {" "}
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--offer div end-->

    <!--product div start--> */}
      <div className="container-fluid pt-5 pb-5 ba">
        <h2 className="ms-4">RECENT PRODUCTS</h2>
        <div className="row px-xl-5 mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f1.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f2.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f3.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f4.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f5.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f6.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f8.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
            <div className="mb-4 cate">
              <div className="img12 w-100">
                <img src="image/f7.jpg" alt="" className="w-100" />
              </div>
              <div className="text-center py-4">
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
        {/* <!--row div end--> */}
      </div>
      {/* <!--product div end-->
    <!--container div start--> */}
      <div className="container-fluid py-5 ba">
        <div className="row px-xl-5 cate">
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-4.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-5.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-6.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-7.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-8.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2 cate">
            <img
              src="https://pnecommerce.netlify.app/img/vendor-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
