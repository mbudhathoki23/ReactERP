import "../../index.css";

import styled from "styled-components";

const Wrapper = styled.section`
  .containg {
    height: 100%;
  }

  .cmargin {
    margin: auto;
  }

  .nodomargin {
    color: black;
    background-color: white;
    box-shadow: 7px 11px 23px 0px rgba(144, 144, 148, 0.75);
  }

  .doingmargin {
    /* transform: translateY(-10px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25); */
  }

  .iconcolor {
    color: red;
  }

  .colorgray {
    color: gray;
  }

  .underline {
    text-decoration: underline;
  }

  .ourservicemage {
    /* border: 1px solid green; */
  }

  .ourservicemage2 {
    border: 1px solid yellow;
  }

  .ourservicesmain {
    display: flex;
  }

  .hvVMRI .icon-color {
    color: "#F21045";
  }

  .paratrue {
  }

  .parafasle {
    color: black;
  }

  .holebackground {
    background-color: #c4b5fd;
  }

  .imageservicing {
    width: 130%;
    height: 120%;
    border-radius: 20px;
  }

  .twodoing {
    display: flex;
    justify-content: space-around;
  }

  .texting {
    color: var(--primary--800);
    cursor: pointer;
  }

  .weight {
    font-weight: bold;
  }

  .backgroundColorChange {
    background-color: #c4b5fd;
  }

  .paragraphingtext {
    color: var(--primary--800);
  }
  .our-services-box {
    transition: all 300ms;
  }
  .our-services-box:hover {
    background-color: var(--primary--800);
    cursor: pointer;
    transform: scale(1.1)
  }

  .our-service-icon,
  .our-service-title,
  .our-service-paratitle {
    transition: all 250ms;
    color: #5b21b6;
  }
  .our-services-box:hover .our-service-icon,
  .our-services-box:hover .our-service-title,
  .our-services-box:hover .our-service-paratitle {
    color: var(--primary--300);
  }

  .MuiGrid-root .MuiGrid-item{
    height:auto;
  }

`;

export default Wrapper;
