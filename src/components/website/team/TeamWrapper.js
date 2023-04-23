import styled from "styled-components";

const Wrapper = styled.section`
  .title {
    color: var(--primary--800);
    cursor: pointer;
  }

  .subtitle {
    color: var(--primary--800);
  }
  .our-portfolio-section {
    background-color: var(--primary--300);
  }

  .carousel_item {
    height: calc(100vh - 300px);
    margin: 0 1rem;
    padding: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 0;
    transition: all 1.2s linear;
    border-radius: 20px;
    cursor: grab;
  }

  .carousel_item::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    border-radius: 20px;
  }

  .carousel_item:hover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(91, 33, 182);
    background: -moz-linear-gradient(
      180deg,
      rgba(91, 33, 182, 0.5) 0%,
      rgba(139, 92, 246, 0.5) 42%,
      rgba(237, 233, 254, 0.5) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(91, 33, 182, 0.5) 0%,
      rgba(139, 92, 246, 0.5) 42%,
      rgba(237, 233, 254, 0.5) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(91, 33, 182, 0.5) 0%,
      rgba(139, 92, 246, 0.5) 42%,
      rgba(237, 233, 254, 0.5) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5b21b6",endColorstr="#ede9fe",GradientType=1);
    z-index: 0;
    /* slide in bottom animation */
    -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    border-radius: 20px;
  }

  .active-on-hover {
    display: none;
  }

  .carousel_item:hover .active-on-hover {
    display: block;
    position: relative;
    z-index: 5;
    text-align: center;
    /* boounce in from bottom animation */
    -webkit-animation: bounce-in-bottom 2s both;
    animation: bounce-in-bottom 2s both;
  }

  .portfolio-icon {
    font-size: 40px;
    color: var(--primary--300);
    transition: all 1s linear;
  }

  .portfolio-icon:hover {
    color: var(--primary--200);
  }

  .contact-links {
    margin-top: 400px;
  }

  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left {
    background-color: var(--primary--700);
  }
  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right {
    background-color: var(--primary--700);
  }

  /**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  /**
 * ----------------------------------------
 * animation bounce-in-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes bounce-in-bottom {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(65px);
      transform: translateY(65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(28px);
      transform: translateY(28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-bottom {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(65px);
      transform: translateY(65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(28px);
      transform: translateY(28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;
export default Wrapper;
