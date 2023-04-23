import styled from "styled-components";

const PricingWrapper = styled.section`
  background-color: var(--primary--200);
  user-select: none;
  .price-card {
    background-color: var(--primary--500);
    height: 100%;
    position: relative;
  }

  .card-action-area {
    height: 100%;
  }
  .price-card-list {
    border-color: var(--primary--800);
  }

  .action-button {
    background-color: var(--primary--200);
    color: var(--tertairy-color);
  }
  .action-button:hover {
    outline: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--primary--200);

    -webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715)
      both;
    animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .css-1gql1ui-MuiTypography-root,
  .css-ui4va4-MuiTypography-root {
    width: 100%;
  }

  .Mui-focusVisible,
  .MuiCardActionArea-focusHighlight {
    background: none;
  }

  .price-card::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary-color);
    transform: rotate(75deg);
    transition: all 0.3s linear;
  }
  .price-card:hover::before {
    transform: rotate(0deg);
  }

  .price-card:hover {
    transform: scale(1.1);
    -webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  }

  .shadow-pop-br {
	-webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

  @-webkit-keyframes shadow-pop-br {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
        4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
        8px 8px #3e3e3e;
      box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
        4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
        8px 8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(-8px);
      transform: translateX(-8px) translateY(-8px);
    }
  }
  @keyframes shadow-pop-br {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
        4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
        8px 8px #3e3e3e;
      box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
        4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
        8px 8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(-8px);
      transform: translateX(-8px) translateY(-8px);
    }
  }

`;

export default PricingWrapper;
