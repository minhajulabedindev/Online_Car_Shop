import React from "react";
import "./PhoneNumber.css";

const PhoneNumber = () => {
  return (
    <div>
      <section class="gauto-call-area my-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="call-box ">
                <div class="call-box-inner text-white py-lg-5 my-lg-5 py-md-5 my-md-5">
                  <h2>
                    With Over <span className="color">150</span> Partners Locations
                  </h2>
                  <p>
                    Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate velit cillum dolore feu fugiat nulla excepteur sint
                    occaecat sed ipsum cupidatat proident culpa exercitation ullamco laboris aliquik.
                  </p>
                  <div class="call-number">
                    <div class="call-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </div>
                    <div class="call-text">
                      <p>
                        need any <span className="color">help?</span>
                      </p>
                      <h4>
                        <a href="tel:4315292093">(431) 529 2093</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneNumber;
