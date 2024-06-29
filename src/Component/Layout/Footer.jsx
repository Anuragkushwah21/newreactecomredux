import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ color: "white", backgroundColor: "#0a4749" }}
      >
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h3 className="mb-4 f">GET IN TOUCH</h3>
            <p className="mb-4">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor. Rebum tempor no vero est magna amet no
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt mr-3 f"></i>
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope mr-3 f"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt mr-3 f"></i>
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h3 className="mb-4 f">GET IN TOUCH</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    HOME
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Our Shop
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Shop Detail
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Shopping Cart
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Cheakout
                  </Link>
                  <Link className="aaa" to="">
                    <i className="fa fa-angle-right mb-2"></i>
                    Contact US
                  </Link>
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <h3 className="mb-4 f">MY ACCOUNT</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    HOME
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Our Shop
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Shop Detail
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Shopping Cart
                  </Link>
                  <Link className="aaa mb-2" to="">
                    <i className="fa fa-angle-right"></i>
                    Cheakout
                  </Link>
                  <Link className="aaa" to="">
                    <i className="fa fa-angle-right mb-2"></i>
                    Contact US
                  </Link>
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <h3 className="mb-4 f">MY ACCOUNT</h3>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <form>
                  <div className="input-group bg-light">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-append y ms-1">
                      <button className="btn btn-square y">Sign UP</button>
                    </div>
                  </div>
                </form>
                <h5 className="aaa mt-3 mb-4">FOLLOW US</h5>
                <div className="d-flex">
                  <Link className="btn y me-2" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn y me-2" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn y me-2" to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="btn y" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "#00b0b5" }}
        >
          <div className="col-md-6 px-xl-0">
            <p>
              ©
              <Link className="f" to="">
                {" "}
                PN INFOSYS{" "}
              </Link>
              .
              <Link className="f" to="">
                PNINFOSYS
              </Link>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-end">
            <img
              src="https://pnecommerce.netlify.app/img/payments.png"
              alt=""
              className="img12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
