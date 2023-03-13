import React from "react";
import Wrapper from "../assest/wrappers/NavsBarsPage";
import Mrsolution from "../assest/images/MrSolution.png";
import { Link } from "react-router-dom";

const NavsBars = () => {
  return (
    <Wrapper>
      <div className="Container">
        <div className="secondCOn">
          <div className="imgsolution">
            <img src={Mrsolution} className="doingimg"></img>

            <div className="titlingf">
              <h4>M AND R SOLUTION </h4>
              <p style={{ fontSize: 12 }}>Putalisadak, kathmandu</p>
            </div>
          </div>

          <div className="imgsolutioning">
            <div className="listing listinging ">
              <div class="dropdown">
                <button
                  class="btn btn-link dropdown-toggle text-light text-decoration-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produts
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown ">
                <button
                  class="btn btn-link dropdown-toggle text-light text-decoration-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-link text-light text-decoration-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing
                </button>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-link dropdown-toggle text-light text-decoration-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-link text-light text-decoration-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"

                >
                  Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavsBars;
