import React from "react";
import "./Rating.css";

const Rating = () => {
  return (
    <div>
      <div class="rev-section py-5 my-5  ">
        <h2 class="title">Reviews</h2>

        <div class="reviews">
          <div class="review">
            {/* <div class="head-review">
              <img className="img-rating" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" className="w-50" />
            </div> */}
            <div class="body-review">
              <div class="name-review">Sam.B</div>
              <div class="place-review">Germany</div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <div class="desc-review">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
              </div>
            </div>
          </div>
          <div class="review">
            {/* <div class="head-review">
              <img className="img-rating" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" className="w-50" />
            </div> */}
            <div class="body-review">
              <div class="name-review">Rose.F</div>
              <div class="place-review">Paris</div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="desc-review">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
              </div>
            </div>
          </div>
          <div class="review">
            {/* <div class="head-review">
              <img className="img-rating" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" className="w-50" />
            </div> */}
            <div class="body-review">
              <div class="name-review">Harry.H</div>
              <div class="place-review">New York</div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <div class="desc-review">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
