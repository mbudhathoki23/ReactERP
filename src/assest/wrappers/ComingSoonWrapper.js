import styled from "styled-components";

const ComingSoonWrapper = styled.section`
  .title {
    /* font-size: 3rem; */
    font-size: 68px;
    font-weight: 600;
    color: white;
    text-shadow: 0px 0px 10px var(--primary--500);
    line-height: 0.8;
    margin: 1rem 0 0 0;
  }
  .sub-title {
    font-size: 20px;
  }
  .coming-soon-section {
    height: 100vh;
    background-color: var(--primary--200);
  }

  .coming-soon-logo-img {
    height: 500px;
    width: 500px;
    background-size: contain;
  }
  .grid-container {
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .coming-soon-mail,
  .coming-soon-phone-number {
    font-size: 22px;
    font-weight: 800;
    color: var(--primary--600);
  }

  .coming-soon-phone-number {
    font-size: 1.2rem;
  }
  .coming-soon-phone-number:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .features-offered-title {
    font-size: 42px;
    font-weight: 600;
    text-shadow: 0px 0px 10px var(--primary--300);
  }
  .software-list {
    font-size: 20px;
    font-weight: 600;
  }
  .features-offered {
    font-size: 24px;
    font-weight: 700;
    transition: all 0.5ms ease-in-out 0.5ms;
    color: var(--primary--800)
  }
  .features-offered:hover {
    cursor: pointer;
    /* text-shadow: 0px 0px 10px var(--primary--800); */
  }

  .custom-card {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 11px var(--primary--400);
    position: relative;
  }
  .card-img {
    position: absolute;
    /* z-index:-1; */
    width: 300px;
    height: 300px;
    opacity: 0.25;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .card-texts {
    /* position: relative; */
  }
  .card-box {
    /* position: relative; */
  }
  .css-1402ce4-MuiGrid-root > .MuiGrid-item {
    padding: 0;
  }

  .counter-box {
    position: absolute;
    top: 0;
    right: 0px;
  }

  .icons-display {
    color: var(--primary--800);
    padding-right: 5px;
    fill: var(--primary--800);
  }
  .map-box {
    /* position: relative; */
    /* z-index:9; */
  }

  .map-size {
    width: 100%;
    height: 700px;
  }

  .qrcode-text{
  font-size: 18px;
  font-weight: 600;
  color: var(--primary--600);
}

.qrcode-img{
  margin-left: 18px;
  border: 2px solid var(--primary--600);
}

  @media (max-width: 600px) {
    .card-box {
      width: 100%;
    }
    .features-offered-title {
      font-size: 28px;
    }
    .coming-soon-logo-img {
      height: 100px;
    }
  }
  @media (min-width: 600) and (max-width: 786px) {
    .coming-soon-logo-img {
      height: 200px;
    }
  }
  @media screen {
    .custom-card {
      margin-left: 10px;
      height: fit-content;
    }
  }

  & path {
    fill: #5b21b6;
  }
`;

export default ComingSoonWrapper;
