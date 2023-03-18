import styled from "styled-components";

const ComingSoonWrapper = styled.section`
  .title {
    font-size: 75px;
    font-weight: 600;
    line-height: 100%;
    color: white;
    text-shadow: 0px 0px 10px var(--primary--500);
  }
  .sub-title {
    font-size: 20px;
  }
  .coming-soon-section {
    height: 100vh;
    background-color: var(--primary--200);
    background-size: 300px 300px;
    background-position: 25% 15%;
  }
  @media (max-width:600px) {
    .coming-soon-section {
      height: 100vh;
      background-size: 100px 100px;
      background-position: 100% 5%;
    }
  }
  .grid-container {
    height: 100vh;
    width: 100%;
  }
  .coming-soon-mail,
  .coming-soon-phone-number {
    font-size: 22px;
    font-weight: 800;
    color: var(--primary--600);
  }
  .coming-soon-phone-number {
    font-size: 18px;
  }
  .coming-soon-phone-number:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .features-offered-title {
    font-size: 42px;
    font-weight: 600;
    /* color: var(--primary--600); */
    text-shadow: 0px 0px 10px var(--primary--300);
  }
  .software-list {
    font-size: 20px;
    /* font-weight: 600; */
    color: var(--primary--500);
  }
  .features-offered {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary--500);
    transition: all 0.25s ease-in-out 0.25s;
  }
  .features-offered:hover {
    cursor: pointer;
    text-shadow: 0px 0px 10px var(--primary--300);
  }

  .custom-card {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 11px var(--primary--400);
  }
`;

export default ComingSoonWrapper;
