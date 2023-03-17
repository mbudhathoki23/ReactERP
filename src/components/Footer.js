import React from "react";
import { Link } from "@mui/material";
import Wrapper from "../assest/wrappers/FooterWrappers";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footerforover">
        <div className="padding_4x">
          <div className="flex">
            <section className="flex-content padding_1x">
              <h3>Top Products</h3>

              <Link href="#">Managed Website</Link>
              <Link href="#">Manage Reputation</Link>
              <Link href="#">Power Tools</Link>
              <Link href="#">Marketing Service</Link>
            </section>
            <section className="flex-content padding_1x">
              <h3>Quick Links</h3>
              <Link href="#">Jobs</Link>
              <Link href="#">Brand Assets</Link>
              <Link href="#">Investor Relations</Link>
              <Link href="#">Terms of Service</Link>
            </section>
            <section className="flex-content padding_1x">
              <h3>Features</h3>
              <Link href="#">Jobs</Link>
              <Link href="#">Brand Assets</Link>
              <Link href="#">Investor Relations</Link>
              <Link href="#">Terms of Service</Link>
            </section>
            <section className="flex-content padding_1x">
              <h3>Resources</h3>
              <Link href="#">Guides</Link>
              <Link href="#">Research</Link>
              <Link href="#">Experts</Link>
              <Link href="#">Agencies</Link>
            </section>
            <section className="flex-content padding_1x">
              <h3>Newsletter</h3>
              <p>You can trust us. we only send promo offers,</p>
              <fieldset className="fixed_flex">
                <input
                  type="email"
                  name="newsletter"
                  placeholder="Your Email Address"
                />
                <button className="btn btn_2">Subscribe</button>
              </fieldset>
            </section>
          </div>
          <div className="flex">
            <section className="flex-content padding_1x">
              <p>Copyright ©2023 All rights reserved || website name</p>
            </section>
            <section className="flex-content padding_1x">
              <div className="makingfoterlink">
                <Link href="#">
                  <BsFacebook className="iconresize"/>
                </Link>
                <Link href="#">
                  <BsInstagram className="iconresize"/>
                </Link>
                <Link href="#">
                  <FaTwitter className="iconresize"/>
                </Link>
                <Link href="#">
                  <BiBasketball className="iconresize"/>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
