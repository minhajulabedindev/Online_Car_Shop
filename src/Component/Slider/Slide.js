import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <div class="container containers">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div class="main-card">
          <div class="cards">
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740" alt="" />
                </div>
                <div class="details">
                  <div class="name">Andrew Neil</div>
                  <div class="job">Managing Director </div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img
                    src="https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=740"
                    alt=""
                  />
                </div>
                <div class="details">
                  <div class="name">Jasmine Carter</div>
                  <div class="job">Chief Executive </div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740" alt="" />
                </div>
                <div class="details">
                  <div class="name">Justin Chung</div>
                  <div class="job">Financial Officer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=740"
                    alt=""
                  />
                </div>
                <div class="details">
                  <div class="name">Appolo Reef</div>
                  <div class="job">Technology Officer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img src="https://img.freepik.com/free-photo/smiling-redhead-girl-using-laptop-looking_176420-21328.jpg?w=740" alt="" />
                </div>
                <div class="details">
                  <div class="name">Adrina Calvo</div>
                  <div class="job">Legal Officer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="contentw">
                <div class="img">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=740"
                    alt=""
                  />
                </div>
                <div class="details">
                  <div class="name">Nicole Lewis</div>
                  <div class="job">Marketing Officer</div>
                </div>
                <div class="media-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <label for="one" class=" active one"></label>
          <label for="two" class="two"></label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
