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
    color: var(--tertiary-color);
  }
  .img-container {
    width: 100%;
    min-height: 500px;
    height: auto;
  }

  .css-1s324r5-MuiGrid-root > .MuiGrid-item {
    padding: 0;
  }

  .demo-button,
  .download-button {
    color: var(--primary--800);
    border-color:var(--primary--600);
  }
  .download-button {
    background-color: var(--primary--600);
    color: white;
  }
  .demo-button:hover {
    border-color:var(--primary--800);
  }
  .download-button:hover {
    /* border: 1px solid var(--primary--400); */
    background-color: var(--primary--400);
    color: var(--primary--800);
  }

  @media (max-width: 620px) {
    .img-container {
    width: 100%;
    height: 400px !important;
  }
  }

`;

export default HeroWrapper;
