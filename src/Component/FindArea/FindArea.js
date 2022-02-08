import React from "react";
import "./FindArea.css";

const FindArea = () => {
  return (
    <div>
      <section class="gauto-find-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="find-box">
                <div class="align-items-center row">
                  <div class="col-md-4">
                    <div class="find-text">
                      <h3>Search Your Best Cars here.</h3>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="find-form">
                      <form>
                        <div class="row">
                          <div class="col-md-4">
                            <p>
                              <input type="text" placeholder="From Address" />
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <input type="text" placeholder="To Address" />
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <select placeholder="Select Car">
                                <option>AC Car</option>
                                <option>Non AC Car</option>
                              </select>
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <p>
                              <span class="e-input-group e-control-wrapper e-date-wrapper" style="width: 100%;">
                                <input
                                  id="datepicker"
                                  class="e-control e-datepicker e-lib e-input e-keyboard"
                                  placeholder="Journey Date"
                                  aria-placeholder="Journey Date"
                                  name="datepicker"
                                  aria-live="assertive"
                                  aria-atomic="true"
                                  aria-haspopup="true"
                                  aria-activedescendant="null"
                                  aria-owns="datepicker_options"
                                  aria-expanded="false"
                                  role="combobox"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                  aria-invalid="false"
                                  aria-disabled="false"
                                  tabindex="0"
                                  value=""
                                />
                                <span class="e-clear-icon e-clear-icon-hide" aria-label="close" role="button"></span>
                                <span class="e-input-group-icon e-date-icon e-icons" aria-label="select"></span>
                              </span>
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <span class="e-input-group e-control-wrapper e-time-wrapper e-lib e-keyboard" style="width: 100%;">
                                <input
                                  id="timepicker"
                                  class="e-control e-timepicker e-lib e-input"
                                  name="timepicker"
                                  placeholder="Journey Time"
                                  aria-placeholder="Journey Time"
                                  aria-haspopup="true"
                                  aria-autocomplete="list"
                                  tabindex="0"
                                  aria-activedescendant="null"
                                  aria-owns="timepicker_options"
                                  aria-expanded="false"
                                  role="combobox"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                  aria-invalid="false"
                                  aria-disabled="false"
                                  value=""
                                />
                                <span class="e-clear-icon e-clear-icon-hide" aria-label="close" role="button"></span>
                                <span class="e-input-group-icon e-time-icon e-icons"></span>
                              </span>
                            </p>
                          </div>
                          <div class="col-md-4">
                            <p>
                              <button type="submit" class="gauto-theme-btn">
                                find car
                              </button>
                            </p>
                          </div>
                        </div>
                      </form>
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

export default FindArea;
