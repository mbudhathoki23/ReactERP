import styled from "styled-components";

const HeroWrapper = styled.section`
  .hero-section-container {
    background-color: var(--primary--200);
  }

  .title {
    font-size: 52px;
    font-weight: 600;
    line-height: 100%;
    color: white;
    text-shadow: 0px 0px 10px var(--primary--300);
  }
  .description {
    color: var(--gray--500);
  }
  canvas {
    height: 100vh;
    width: 100vw;
  }
  .hero-section {
    height: 100vh;
    width: 100%;
    position: relative;
  }

  #hero-section-particle {
    position: absolute;
    z-index: 1;
  }

  .content-box {
    height: 100%;
    position: relative;
    z-index: 0;
  }
  .img-container {
    width: 100%;
    height: 100vh;
  }

  .css-1s324r5-MuiGrid-root > .MuiGrid-item {
    padding: 0;
  }

  .button-contact-us {
    background-color: var(--primary--800);
  }
  .button-contact-us:hover {
    background-color: white;
    color: var(--primary--800);
  }
`;

export default HeroWrapper;
