import React from "react";

const Search = () => {
  return (
    <div>
      <div class="topnav">
        <div class="search-container">
          <from class="d-flex flex-nowrap">
            {/* <input class="form-control fs-4 px-lg-3 fs-sm-1  me-2 text-dark search-media" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success " type="submit">
              Search
            </button> */}
          </from>
          <div class="input-group flex-nowrap">
            <input type="search" class="form-control fs-4" placeholder="Search" aria-describedby="addon-wrapping" />{" "}
            <button class="btn btn-outline-warning text-white " type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
