import styled from "styled-components";

const HeroWrapper = styled.section`
  .hero-section-container {
    background-color: var(--primary--200);
    /* width: 100vw; */
    /* height: 100vh; */
  }

  .title {
    font-size: 52px;
    font-weight: 600;
    line-height: 100%;
    color: white;
    text-shadow: 0px 0px 10px var(--primary--300);
  }
  .description {
    color: var(--primary--600);
  }
  .hero-section {
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

  /*  */
  .demo-button,
  .download-button {
    color: var(--primary--800);
    border: 1px solid var(--primary--600);
  }
  .download-button {
    background-color: var(--primary--600);
    color: white;
  }
  .demo-button:hover {
    border: 1px solid var(--primary--800);
  }
  .download-button:hover {
    border: 1px solid var(--primary--400);
    background-color: var(--primary--400);
    color: var(--primary--800);
  }
`;

export default HeroWrapper;
