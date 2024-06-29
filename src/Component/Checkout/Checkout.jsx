import React from "react";

function Checkout() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Checkout</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="payment" className="form-label">
                      Payment Method
                    </label>
                    <select className="form-select" id="payment">
                      <option>Select payment method</option>
                      <option>Credit Card</option>
                      <option>PayPal</option>
                      <option>Stripe</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
