import React from "react";
import "./Premium.css";

const Premium = () => {
  return (
    <div>
      <div class="conten  my-lg-5 pt-lg-5 my-md-5 pt-md-5">
        <div class="card one">
          <div class="top">
            <div class="title">Basic</div>
            <div class="price-sec">
              <span class="dollar">$</span>
              <span class="price">14</span>
              <span class="decimal">.99</span>
            </div>
          </div>
          <div class="info">Limited features you will get on this package or plan</div>
          <div class="details">
            <div class="one">
              <span>One Addons Domain</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>100GB Local Storage</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Lifetime Tech Support</span>
              <i class="fas fa-times"></i>
            </div>
            <div class="one">
              <span>Unlimited Data Transfer</span>
              <i class="fas fa-times"></i>
            </div>
            <button>Purchase</button>
          </div>
        </div>
        <div class="card two">
          <div class="top">
            <div class="title">Extended</div>
            <div class="price-sec">
              <span class="dollar">$</span>
              <span class="price">16</span>
              <span class="decimal">.99</span>
            </div>
          </div>
          <div class="info">Only some features you will get on this package or plan</div>
          <div class="details">
            <div class="one">
              <span>Five Addons Domain</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>200GB Local Storage</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Lifetime Tech Support</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Unlimited Data Transfer</span>
              <i class="fas fa-times"></i>
            </div>
            <button>Purchase</button>
          </div>
        </div>
        <div class="card three">
          <div class="top">
            <div class="title">Premium</div>
            <div class="price-sec">
              <span class="dollar">$</span>
              <span class="price">18</span>
              <span class="decimal">.99</span>
            </div>
          </div>
          <div class="info">All features you will get on this package or plan</div>
          <div class="details">
            <div class="one">
              <span>10 Addons Domain</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Unlimited Local Storage</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Lifetime Tech Support</span>
              <i class="fas fa-check"></i>
            </div>
            <div class="one">
              <span>Unlimited Data Transfer</span>
              <i class="fas fa-check"></i>
            </div>
            <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
