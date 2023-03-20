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
    background-color: var(--primary--200);
  }
  .carousel_item {
    height: 700px;
    margin: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 0;
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
      90deg,
      rgba(91, 33, 182, 1) 0%,
      rgba(139, 92, 246, 1) 42%,
      rgba(237, 233, 254, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(91, 33, 182, 1) 0%,
      rgba(139, 92, 246, 1) 42%,
      rgba(237, 233, 254, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(91, 33, 182, 0.5) 0%,
      rgba(139, 92, 246, 0.5) 42%,
      rgba(237, 233, 254, 0.5) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5b21b6",endColorstr="#ede9fe",GradientType=1);
    z-index: 0;
  }

  .active-on-hover {
    display: none;
  }

  .carousel_item:hover .active-on-hover {
    display: block;
    position: relative;
    z-index: 5;
    text-align: center;
  }
`;
export default Wrapper;
