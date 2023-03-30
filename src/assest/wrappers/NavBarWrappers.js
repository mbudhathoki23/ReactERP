import styled from "styled-components";

const Wrapper = styled.nav`
  .navbar-bg-color {
    background-color: var(--primary--400);
  }

  .navigation-xl-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .logo-name {
    display: flex;
    width: 50%;
  }

  .img-container {
    width: 90px;
    height: 90px;
  }

  .company-logo-name {
    font-weight: bold;
    font-size: 2rem;
    color: var(--primary--200);
    text-transform: uppercase;
  }

  .company-logo-location {
    color: var(--primary--200);
    text-transform: capitalize;
    font-weight: 500 !important;
    font-size: 1.1rem;
  }

  Button {
    width: fit-content;
    height: fit-content;
  }

  .cButton {
    font-weight: bold;
    color: var(--primary--100);
    text-decoration: none;
    position: relative;
    transition: all 0.8s ease-in-out;
    margin: 0 inherit;
    padding: 0 inherit;
  }

  .cButton:hover {
    text-decoration: none;
  }

  .cButton::after {
    content: "";
    width: 0%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
    background-color: var(--primary--800);
    transition: all 0.5s ease-in-out;
  }

  .cButton:hover::after {
    width: 100%;
  }

  /* material ui universal class  */
  .css-6hp17o-MuiList-root-MuiMenu-list {
    background-color: red;
  }
  /**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX();
      transform: translateX();
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      opacity: 1;
    }
  }

  /* Keyframes */
  @-webkit-keyframes circle {
    0% {
      width: 1px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 1px;
      z-index: -1;
      background: #eee;
      border-radius: 100%;
    }
    100% {
      background: #aaa;
      height: 5000%;
      width: 5000%;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 0;
    }
  }

  @-webkit-keyframes fill {
    0% {
      width: 0%;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    100% {
      width: 100%;
      height: 100%;
      background: #333;
    }
  }
`;

export default Wrapper;
