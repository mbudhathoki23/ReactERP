import styled from "styled-components";

const Wrapper = styled.section`
  .title {
 color: var(--primary--800);
 font-weight: 600 !important;
  text-align: center !important;
  }
  .containg {
    height: 100%;
  }

  .nodomargin {
    color: black;
    background-color: white;
    box-shadow: 7px 11px 23px 0px rgba(144, 144, 148, 0.75);
  }

  .weight {
    font-weight: bold;
  }

  .backgroundColorChange {
    background-color: var(--primary--300);
  }

  .our-services-box {
    transition: all 300ms;
  }
  .our-services-box:hover {
    background-color: var(--primary--800);
    cursor: pointer;
    transform: scale(1.1);
  }

  .our-service-title{
    color: var(--primary--800)
  }

  .our-service-icon,
  .our-service-paratitle {
    transition: all 250ms;
    color: var(--primary--700);
  }
  .our-services-box:hover .our-service-icon,
  .our-services-box:hover .our-service-title,
  .our-services-box:hover .our-service-paratitle {
    color: var(--primary--300);
  }

  .MuiGrid-root .MuiGrid-item {
    height: auto;
  }

  .scale-in-center {
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation scale-in-center
 * ----------------------------------------
 */
  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default Wrapper;
