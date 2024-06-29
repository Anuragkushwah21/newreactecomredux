import React from "react";

function Contact() {
  return (
    <>
      {/* <div classNameName="container mt-5">
        <h2 classNameName="text-center mb-4">Contact Us</h2>
        <form>
          <div classNameName="mb-3">
            <label htmlFor="name" classNameName="form-label">
              Name
            </label>
            <input
              type="text"
              classNameName="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div classNameName="mb-3">
            <label htmlFor="email" classNameName="form-label">
              Email
            </label>
            <input
              type="email"
              classNameName="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div classNameName="mb-3">
            <label htmlFor="message" classNameName="form-label">
              Message
            </label>
            <textarea
              classNameName="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" classNameName="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}

      <div className="container-fluid ba pt-4">
        <h2 className="mx-xl-5 mb-4">
          <span className="py-3 mt-3 mb-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5 mt-5">
          <div className="col-lg-7 mb-5 pb-4">
            <div className="row px-xl-4 pt-5 pb-4 bg-light">
              <div className="bg-light mb-30">
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    name="n"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    name="e"
                    placeholder="Your Email"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="s"
                    placeholder="Subject"
                    required
                  />
                  <br />
                  <textarea
                    className="form-control"
                    rows="8"
                    formcontrolname="message"
                    id="message"
                    name="message*"
                    placeholder="Message"
                    ng-reflect-name="message"
                    ng-reflect-klass="form-control"
                  ></textarea>
                  <br />
                  <a href="" className="btn y">
                    Send Message
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="row px-xl-4 bg-light pt-5 ms-3 me-3 pb-5">
              <div className="bg-light pb-30 mb-5">
                <iframe
                  style={{width: "80%", height: "250px"}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder={"0"}
                  allowfullscreen={""}
                  aria-hidden={"false"}
                  tabindex={"0"}
                ></iframe>
              </div>
              <div className="bg-light pb-30 mb-4 ps-3">
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt f mr-3"></i>
                  123 Street, New York, USA
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope f mr-3"></i>
                  info@example.com
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt f mr-3"></i>
                  +012 345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
