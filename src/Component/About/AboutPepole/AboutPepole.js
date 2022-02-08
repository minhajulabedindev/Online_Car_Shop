import React from "react";
import "./AboutPeople.css";
const AboutPepole = () => {
  return (
    <div>
      <article class="usercard">
        <div class="usercard_body">
          <header class="usercard_header">
            <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" class="usercard_user" alt="User" />
            <div class="usercard_header-info">
              <h3 class="usercard_name">
                John William <span class="usercard_name-label">Britto</span>
              </h3>
              <span class="usercard_post">React Developer</span>
            </div>
          </header>
          <div class="usercard_content">
            <div class="slider">
              <input id="slide1" type="radio" class="slider_switch usercard_switch" name="slider-controls" checked autofocus />
              <label for="slide1" class="slider_control usercard_control"></label>
              <input id="slide2" type="radio" class="slider_switch usercard_switch" name="slider-controls" />
              <label for="slide2" class="slider_control usercard_control"></label>
              <input id="slide3" type="radio" class="slider_switch usercard_switch" name="slider-controls" />
              <label for="slide3" class="slider_control usercard_control"></label>
              <div class="slider_slides">
                <div class="slider_slide">
                  <h4 class="usercard_title">About me</h4>
                  <div class="usercard_stats">
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-globe iconAbout" iconAbout></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Language</span>
                        <span class="stats_value">English</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-map-marker-alt iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Hometown</span>
                        <span class="stats_value">London</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-calendar-alt iconAbout" iconAbout></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Date of birth</span>
                        <span class="stats_value">03 December 1990</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-user-circle iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Gender</span>
                        <span class="stats_value">Male</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="slider_slide">
                  <h4 class="usercard_title">My Skills</h4>
                  <div class="usercard_stats">
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-html5 iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">HTML</span>
                        <span class="stats_value">85%</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-vuejs iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">VUE</span>
                        <span class="stats_value">90%</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-angular iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">AngularJS</span>
                        <span class="stats_value">70%</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-node iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">NodeJS</span>
                        <span class="stats_value">82%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="slider_slide">
                  <h4 class="usercard_title">My Contacts</h4>
                  <div class="usercard_stats">
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-envelope iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">E-mail</span>
                        <a href="#0" class="stats_value">
                          abc@gmail.com
                        </a>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fas fa-mobile-alt iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Phone</span>
                        <a href="tel:0000000000" class="stats_value">
                          000-000-00-00
                        </a>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-instagram iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Instagram</span>
                        <span class="stats_value">@abc</span>
                      </div>
                    </div>
                    <div class="stats usercard_stats-item">
                      <i class="fab fa-facebook iconAbout"></i>
                      <div class="stats_info usercard_stats-info">
                        <span class="stats_name usercard_stats-name">Facebook</span>
                        <span class="stats_value">ABC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutPepole;
