import { Link } from "react-router-dom";
import React from "react";


function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="container-fluid">
            <div className="row py-1 px-xl-5 z">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                  <Link className="a" to="/about">
                    About
                  </Link>
                  <Link className="a" to="/contact">
                    Contact
                  </Link>
                  <Link className="a" to="">
                    Help
                  </Link>
                  <Link className="a" to="">
                    FAQs
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <div className="d-inline-flex align-items-center bg-light">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      My Account
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        Sign in
                      </button>
                      <button className="dropdown-item" type="button">
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="btn-group mx-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      USD
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        EUR
                      </button>
                      <button className="dropdown-item" type="button">
                        GBP
                      </button>
                      <button className="dropdown-item" type="button">
                        CAD
                      </button>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      EN
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        FR
                      </button>
                      <button className="dropdown-item" type="button">
                        AR
                      </button>
                      <button className="dropdown-item" type="button">
                        RU
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                  <Link to="" className="btn px-0 ml-2">
                    <i className="fas fa-heart text-dark"></i>
                    <span
                      className="badge text-dark border border-dark rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </Link>
                  <Link to="" className="btn px-0 ml-2">
                    <i className="fas fa-shopping-cart text-dark"></i>
                    <span
                      className="badge text-dark border border-dark rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex ba">
              <div className="col-lg-4">
                <Link to="">
                  <img
                    src="https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72"
                    alt=""
                    style={{ borderRadius: "50%", width: "125px" }}
                  />
                  {/* <img src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/logo%2Fcolorlogo.png?alt=media&token=0386f0aa-e1e1-4950-924f-3eedaa82d967"
                alt=""/> */}
                </Link>
              </div>
              <div className="col-lg-4 text-left pt-3 mt-4">
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for products"
                    />
                    <div className="ml-1">
                      <span className="search f">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 text-end mt-4">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
              </div>
            </div>
          </div>
          {/* <!--top-bar div end-->

        <!--nav-bar start--> */}
          <div className="container-fluid bg-dark b">
            <div className="row px-xl-5">
              <div className="col-lg-3 d-none d-lg-block y">
                <Link
                  className="btn align-item-center d-flex justify-content-between w-100 y"
                  to=""
                  style={{ height: "65px", padding: "22px 30px" }}
                >
                  <h6 className="text-dark m-0">
                    <i className="fa fa-bars"></i>
                    Categories
                  </h6>
                  <i className="fa fa-angle-down text-dark"></i>
                </Link>
              </div>
              <div className="col-lg-9 pt-2">
                <div className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
                  <Link
                    to=""
                    className="text-decoration-none d-block d-lg-none"
                  >
                    <span className="h1 text-uppercase text-dark bg-light px-2">
                      Multi
                    </span>
                    <span className="h1 text-uppercase text-light bg-primary px-2 ms-1">
                      Shop
                    </span>
                  </Link>

                  <button
                    className="navbar-toggler"
                    data-bs-target="#fardeen"
                    data-bs-toggle="collapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="navbar-collapse justify-content-between collapse"
                    id="fardeen"
                  >
                    <div className="navbar-nav me-auto py-0">
                      <Link className="nav-item nav-link active" to="/">
                        Home
                      </Link>
                      <Link className="nav-item nav-link" to="/product">
                        Product
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        to="/productDetail/:id"
                      >
                        Product Detail
                      </Link>
                      <div className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          to=""
                        >
                          Pages
                        </Link>
                        <div className="dropdown-menu rounded-0 border-0 m-0">
                          <Link className="dropdown-item" to="/cart">
                            Shopping Cart
                          </Link>
                          <Link className="dropdown-item" to="/cheakout">
                            Cheakout
                          </Link>
                        </div>
                      </div>

                      <Link className="nav-item nav-link" to="/contact">
                        Contact
                      </Link>
                    </div>
                    <div className="navbar-nav ms-auto py-0 d-none d-lg-block">
                      <Link to="" className="btn px-0">
                        <i className="fas fa-heart f"></i>
                        <span
                          className="badge border rounded-circle"
                          style={{ paddingLeft: "5px", paddingRight: "5px" }}
                        >
                          0
                        </span>
                      </Link>
                      <Link to="/cart" className="btn px-0 ml-3">
                        <i className="fas fa-shopping-cart f"></i>
                        <span
                          className="badge border rounded-circle"
                          style={{ paddingLeft: "5px", paddingRight: "5px" }}
                        >
                          0
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!--NAVBAR END--> */}
    </>
  );
}

export default Header;
