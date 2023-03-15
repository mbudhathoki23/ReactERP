import * as React from "react";
import Wrapper from "../assest/wrappers/NavsBarsPage";
import Mrsolution from "../assest/images/MrSolution.png";
<<<<<<< HEAD
import Dropdown from "react-bootstrap/Dropdown";
import { Typography } from "@mui/material";
=======

>>>>>>> 223a8b95526bd9a23b23f4e23b088974b13d6b9a

const NavsBars = () => {
  return (
    <Wrapper>
      <div>
        <div className="Container">
          <div className="secondCOn">
            <div className="imgsolution">
              <img src={Mrsolution} className="doingimg" />
              <div className="titlingf">
                <Typography
                  sx={{ p: 0, m: 0 }}
                  fontWeight={400}
                  fontSize={25.008}
                >
                  M AND R SOLUTION
                </Typography>
                <Typography fontSize={12}>Putalisadak, kathmandu</Typography>
              </div>
            </div>

            <div className="imgsolutioning">
              <div className="listing listinging ">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="reactdrop"
                  >
                    Produts
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="reactdrop"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div class="dropdown">
                  <button
                    class="btn btn-link reactdrop"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pricing
                  </button>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="reactdrop"
                  >
                    Company
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div class="dropdown">
                  <button
                    class="btn btn-link reactdrop"
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

      </div>
    </Wrapper>
  );
};

export default NavsBars;
